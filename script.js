const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}




// var swiper = new Swiper(".home-slider", {
//   spaceBetween: 30,
//   centeredSlides: true,
//   autoplay: {
//     delay: 7500,
//     disableOnInteraction: false,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   loop:true,
// });

// var swiper = new Swiper(".review-slider", {
//   spaceBetween: 20,
//   centeredSlides: true,
//   autoplay: {
//     delay: 7500,
//     disableOnInteraction: false,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   loop:true,
//   breakpoints: {
//     0: {
//         slidesPerView: 1,
//     },
//     640: {
//       slidesPerView: 2,
//     },
//     768: {
//       slidesPerView: 2,
//     },
//     1024: {
//       slidesPerView: 3,
//     },
//   },
// });

// Function to handle adding items to the cart list
// function addToCart(itemName, itemPrice) {
//   // Simulated data for demonstration purposes (replace this with your actual logic)
//   const cartList = document.getElementById('cart-items');
//   const listItem = document.createElement('li');
//   listItem.textContent = `${itemName} - $${itemPrice}`;
//   cartList.appendChild(listItem);
//   console.log(`${itemName} added to cart`);
// }

// Get all elements with the class 'cart' (cart icons)
// const cartIcons = document.querySelectorAll('.cart');

// // Add a click event listener to each cart icon
// cartIcons.forEach(cartIcon => {
//   cartIcon.addEventListener('click', (event) => {
//       event.preventDefault();
//       const product = event.target.closest('.pro'); // Find the parent product element
//       const productName = product.querySelector('h5').textContent; // Get product name
//       const productPrice = product.querySelector('h4').textContent; // Get product price
//       const priceValue = parseFloat(productPrice.replace('$', '')); // Extract numerical price

//       // Add the selected item to the cart list
//       addToCart(productName, priceValue);
//   });
// });


