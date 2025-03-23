document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission
        alert('Thank you for reaching out! We will get back to you soon.');
    });
});