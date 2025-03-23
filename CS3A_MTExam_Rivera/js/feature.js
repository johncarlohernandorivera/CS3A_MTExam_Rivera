let cart = [];
let totalPrice = 0;

function addToCart(productName, price) {
    const existingProduct = cart.find(item => item.name === productName);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ name: productName, price: price, quantity: 1 });
    }

    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    // Clear previous cart items
    cartItems.innerHTML = '';

    // Update cart with new items
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price} (Qty: ${item.quantity})`;
        cartItems.appendChild(listItem);
    });

    // Update total price
    totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    totalPriceElement.textContent = totalPrice.toFixed(2);
}

// Function to remove item from cart
function removeFromCart(productName) {
    cart = cart.filter(item => item.name !== productName);
    updateCart();
}

// Function to update the cart display
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    cartItems.innerHTML = ''; // Clear previous cart items

    // Display updated cart items
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            ${item.name} - $${item.price} (Qty: ${item.quantity}) 
            <button onclick="removeFromCart('${item.name}')">Remove</button>
        `;
        cartItems.appendChild(listItem);
    });

    // Calculate and display the total price
    const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    totalPriceElement.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
}

