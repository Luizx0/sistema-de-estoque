document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const loginContainer = document.querySelector('.login-container');
    const dashboardContainer = document.querySelector('.dashboard-container');
    const productForm = document.getElementById('product-form');
    const productList = document.getElementById('product-list');

    const allowedEmails = ['us1@exemplo.com', 'us2@exemplo.com', 'adm@exemplo.com'];
    let currentUser = '';

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (allowedEmails.includes(email)) {
            if (password === 'senha123') {
                currentUser = email;
                loginContainer.style.display = 'none';
                dashboardContainer.style.display = 'block';
            } else {
                alert('Senha inválida!');
            }
        } else {
            alert('E-mail não autorizado!');
        }
    });

    productForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const productName = document.getElementById('product-name').value;
        const productBrand = document.getElementById('product-brand').value;
        const productSize = document.getElementById('product-size').value;
        const productQuantity = document.getElementById('product-quantity').value;
        const productPrice = document.getElementById('product-price').value;
        const productColor = document.getElementById('product-color').value;

        const newProductRow = document.createElement('tr');

        newProductRow.innerHTML = `
            <td>${productName}</td>
            <td>${productBrand}</td>
            <td>${productSize}</td>
            <td>${productQuantity}</td>
            <td>${productPrice}</td>
            <td>${productColor}</td>
            <td>
                ${currentUser === 'adm@exemplo.com' ? `
                    <button class="edit-btn">Editar</button>
                    <button class="delete-btn">Excluir</button>
                ` : ''}
            </td>
        `;

        if (currentUser === 'adm@exemplo.com') {
            newProductRow.querySelector('.edit-btn').addEventListener('click', () => {
                const cells = newProductRow.querySelectorAll('td');
                document.getElementById('product-name').value = cells[0].textContent;
                document.getElementById('product-brand').value = cells[1].textContent;
                document.getElementById('product-size').value = cells[2].textContent;
                document.getElementById('product-quantity').value = cells[3].textContent;
                document.getElementById('product-price').value = cells[4].textContent;
                document.getElementById('product-color').value = cells[5].textContent;

                productList.removeChild(newProductRow);
            });

            newProductRow.querySelector('.delete-btn').addEventListener('click', () => {
                productList.removeChild(newProductRow);
            });
        }

        productList.appendChild(newProductRow);
        productForm.reset();
    });
});
