// Existing code
document.getElementById('signupBtn').addEventListener('click', function() {
    alert('Sign Up button clicked!');
    // Add your sign-up logic here
});
document.getElementById('loginBtn').addEventListener('click', function() {
    alert('Login button clicked!');
    // Add your login logic here
});
// Sample cart items (replace with your actual cart management logic)
const cartItems = [
    { id: 1, name: 'Product A', price: 20.00 },
    { id: 2, name: 'Product B', price: 30.00 },
    { id: 3, name: 'Product C', price: 25.00 }
];

function OpenCart() {
    // Clear existing items in the cart modal
    $('#cartItemsList').empty();

    // Populate cart items dynamically
    cartItems.forEach(item => {
        const listItem = `<li>${item.name} - $${item.price.toFixed(2)}</li>`;
        $('#cartItemsList').append(listItem);
    });

    // Show the cart modal
    $('#cartModal').slideDown('slow');

    // Scroll to the cart modal section
    $('html, body').animate({
        scrollTop: $('#cartModal').offset().top
    }, 1000);
}

function CloseCart() {
    $('#cartModal').slideUp('slow');
}

// Close the modal if the user clicks outside of it
$(document).click(function(event) {
    const modal = $('#cartModal');
    if (event.target.isEqualNode(modal[0])) {
        modal.hide();
    }
});

// Add this JavaScript code to your existing script.js or create a new script block

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const navList = document.querySelector('.nav-list');

    menuToggle.addEventListener('change', function () {
        navList.classList.toggle('show', menuToggle.checked);
    });
});

function toggleCart() {
    const cartSection = document.getElementById('cart');
    cartSection.style.right = (cartSection.style.right === '0' || cartSection.style.right === '') ? '-25%' : '0';
}
