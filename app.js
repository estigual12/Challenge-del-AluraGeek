let products = [];

function addProduct() {
    const productName = document.getElementById('productName').value;
    const productPrice = document.getElementById('productPrice').value;

    if (productName && productPrice) {
        const product = {
            id: Date.now(),
            name: productName,
            price: parseFloat(productPrice)
        };

        products.push(product);
        document.getElementById('productName').value = '';
        document.getElementById('productPrice').value = '';
        renderProducts();
    } else {
        alert('Please enter both name and price of the product.');
    }
}

function renderProducts() {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';

    products.forEach(product => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${product.name} - $${product.price.toFixed(2)}
            <button onclick="deleteProduct(${product.id})">Delete</button>
        `;
        productList.appendChild(li);
    });
}

function deleteProduct(id) {
    products = products.filter(product => product.id !== id);
    renderProducts();
}

document.addEventListener('DOMContentLoaded', renderProducts);
