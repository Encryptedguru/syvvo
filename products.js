window.addEventListener("DOMContentLoaded", fetchProducts)
const productsContainer = document.querySelector('.pro-container')
let GLOBAL_PRODUCTS;


async function fetchProducts() {
    
    const res = await fetch('/products.json');

    const products = await res.json();


     loadProducts(productsContainer, products)

     GLOBAL_PRODUCTS = products;
    
}


function loadProducts(parent, products) {
    
    products.forEach((product) => {

        const productDiv = document.createElement('div');
        productDiv.className = "pro";
        const productHtml = `
        
        <img src="${product.image}" alt="">
        <div class="des">
            <span>${product.category}</span>
            <h5>${product.productName}</h5>
            <div class="star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
            <h4>$${product.price}</h4>
        </div>
        <button id="${product.id}" onclick="addToCart(${product.id})"><i class="fas fa-shopping-cart cart"></i></button>
  
        `

        productDiv.innerHTML = productHtml;

        parent.appendChild(productDiv);
    })
}


function addToCart(productId) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || []

     const isProductInCart = cartItems.find((item) => item.id == productId);
     
     if(isProductInCart) return;

    const product = GLOBAL_PRODUCTS.find((product) => product.id === productId);

    if(product != -1) {
        cartItems.push(product)
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
    }
}