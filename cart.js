window.addEventListener("DOMContentLoaded", loadCartProducts);
const tbody = document.querySelector('tbody');


function loadCartProducts() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

   if(cartItems.length > 0) {
    cartItems.forEach((cartItem) => {
        const tr = document.createElement('tr');
        tr.id = cartItem.id;
        tr.innerHTML =  `
    
        <td><button onclick="removeFromCart(${cartItem.id})"><i class="far fa-times-circle"></i></button></td>
        <td><img src="${cartItem.image}" alt=""></td>
        <td>${cartItem.productName}</td>
        <td>$${cartItem.price}</td>
        <td><input type="number" value="1" name="" id="item-${cartItem.id}" onchange="updateProductSubTotal(${cartItem.id})"></td>
        <td class="item-${cartItem.id}">$${cartItem.price}</td>   
        `
        

        tbody.appendChild(tr);
    })
   } else {
    
    const h3 = document.createElement('h3');

    h3.textContent = 'No Products in the cart';

    tbody.appendChild(h3);
   }
}

function updateProductSubTotal(id) {
    

    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    let product = cartItems.find((product) => product.id === id);

    if(product != -1) {

        const inputValue = document.getElementById("item-"+id)

        if(inputValue.value == 0) {
            inputValue.value = 1;
            return;
        }
        const subTotalTd = document.querySelector(".item-"+id)
       
        subTotalTd.textContent = `$${product.price * inputValue.value}`
        
    }
  
}

function removeFromCart(id) {
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));

    const productIdex = cartItems.findIndex((product) => product.id == id);

    if(productIdex != -1) {
        cartItems.splice(productIdex, 1);

       localStorage.setItem("cartItems", JSON.stringify(cartItems))

       tbody.innerHTML = ''

       loadCartProducts();
    }
}