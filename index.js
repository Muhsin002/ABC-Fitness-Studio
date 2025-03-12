document.addEventListener('DOMContentLoaded', () => {
    let cart = [];

    document.querySelectorAll('.product-item button').forEach(button => {
        button.addEventListener('click', () => {
            const product = button.parentElement;
            const productName = product.querySelector('p').textContent;
            cart.push(productName);
            alert('Item added to the cart');
        });
    });

    const viewCartButton = document.querySelector('.view-cart');
    if (viewCartButton) {
        viewCartButton.addEventListener('click', () => {
            const cartModal = document.getElementById('cart-modal');
            if (cartModal) {
                const cartItemsDiv = cartModal.querySelector('.cart-items');
                cartItemsDiv.innerHTML = '';
                cart.forEach(item => {
                    const itemDiv = document.createElement('div');
                    itemDiv.textContent = item;
                    cartItemsDiv.appendChild(itemDiv);
                });
                cartModal.style.display = 'block';
                cartModal.classList.add('active');
            }
        });
    }

    const clearCartButton = document.querySelector('.clear-cart');
    if (clearCartButton) {
        clearCartButton.addEventListener('click', () => {
            if (cart.length > 0) {
                alert('Cart cleared');
                cart = [];
                const cartItemsDiv = document.querySelector('.cart-items');
                if (cartItemsDiv) {
                    cartItemsDiv.innerHTML = '';
                }
            } else {
                alert('No items to clear');
            }
        });
    }

    const processOrderButton = document.querySelector('.process-order');
    if (processOrderButton) {
        processOrderButton.addEventListener('click', () => {
            if (cart.length > 0) {
                alert('Thank you for your order');
                sessionStorage.removeItem('sessionData');
                cart = [];
                const cartItemsDiv = document.querySelector('.cart-items');
                if (cartItemsDiv) {
                    cartItemsDiv.innerHTML = '';
                }
                const cartModal = document.getElementById('cart-modal');
                if (cartModal) {
                    cartModal.style.display = 'none';
                    cartModal.classList.remove('active');
                }
            } else {
                alert('Cart is empty');
            }
        });
    }

    const closeButton = document.querySelector('.modal .close');
    if (closeButton) {
        closeButton.addEventListener('click', () => {
            const cartModal = document.getElementById('cart-modal');
            if (cartModal) {
                cartModal.style.display = 'none';
                cartModal.classList.remove('active');
            }
        });
    }

    const feedbackForm = document.getElementById('feedback-form');
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');

            if (nameInput.value.trim() === '' ||
                emailInput.value.trim() === '' ||
                messageInput.value.trim() === '') {
                alert('Please fill in your name, email, and message.');
                return; 
            }

            const formData = new FormData(event.target);
            console.log('Feedback submitted:', Object.fromEntries(formData.entries()));
            alert('Thank you for your message Vutomi Mdumela');
            event.target.reset();
        });
    }

    const subscribeButton = document.querySelector('.subscribe-button');
    if (subscribeButton) {
        subscribeButton.addEventListener('click', () => {
            alert('Thank you for subscribing');
        });
    }

    const userData = { 
        username: 'vutomi Mdumela', 
        email: 'mdumelavutomi@gmail.com', 
        message: 'Hello, I would like to join the gym.' 
    }; 

    localStorage.setItem('userData', JSON.stringify(userData)); 

    const storedUserData = JSON.parse(localStorage.getItem('userData')); 
    console.log('User Data from Local Storage:', storedUserData); 

    const sessionData = {
        sessionID: 'ABC123',
        groups: ['GroupYoga', 'GroupKickBoxing', 'GroupPilates']
    };

    sessionStorage.setItem('sessionData', JSON.stringify(sessionData));

    const storedSessionData = JSON.parse(sessionStorage.getItem('sessionData'));
    console.log('Session Data from Session Storage:', storedSessionData);

    document.getElementById('localStorageData').textContent = JSON.stringify(storedUserData, null, 2);

    document.getElementById('sessionStorageData').textContent = JSON.stringify(storedSessionData, null, 2);
});

