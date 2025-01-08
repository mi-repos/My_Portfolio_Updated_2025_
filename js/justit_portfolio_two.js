// Function to scroll the page up or down
function scrollPage(direction) {
    if (direction === 'up') {
        window.scrollBy(0, -window.innerHeight); // Scroll up by one screen height
    } else if (direction === 'down') {
        window.scrollBy(0, window.innerHeight); // Scroll down by one screen height
    }
}

// Toggle hamburger menu
document.getElementById('hamburger-menu').addEventListener('click', function() {
    document.querySelector('.nav').classList.toggle('active');
});

// Contact form submission handling
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Your message has been submitted!');
        document.getElementById('contact-form').reset();
    } else {
        alert('Please fill in all required fields.');
    }
});


