// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Submission Handlers
const contactForm = document.getElementById('contactForm');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}

if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Login functionality will be implemented soon!');
    });
}

if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Sign up functionality will be implemented soon!');
    });
}

// Service Button Click Handlers
document.querySelectorAll('.service-btn').forEach(button => {
    button.addEventListener('click', function() {
        const service = this.parentElement.querySelector('h3').textContent;
        alert(`You clicked on ${service} service. This feature will be implemented soon!`);
    });
});

// Add scroll event listener for navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = '#084d24';
    } else {
        navbar.style.background = '#0d6832';
    }
});