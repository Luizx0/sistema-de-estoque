document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const loginContainer = document.querySelector('.login-container');
    const dashboardContainer = document.querySelector('.dashboard-container');
    const productForm = document.getElementById('product-form');
    const productList = document.getElementById('product-list');

   
    const allowedEmails = ['us1@example.com', 'us2@example.com', 'adm@example.com']; // Email Fictício


    loginForm.addEventListener('submit', (e) => {
        e.preventDefault(); 

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;


        if (allowedEmails.includes(email)) {
   
            if (password === '123') {  // Senha fictícia
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
            <td><button>Editar</button></td>
        `;
        productList.appendChild(newProductRow);


        productForm.reset();
    });
});
