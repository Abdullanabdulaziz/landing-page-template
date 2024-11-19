// scripts.js

// Sticky header effect when scrolling
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth scrolling for anchor links
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - header.offsetHeight, // Adjusting for sticky header
            behavior: 'smooth'
        });
    });
});

// Detect if features section is in view for animation
const features = document.querySelectorAll('.feature');
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target); // Stop observing once in view
        }
    });
}, {
    threshold: 0.5 // Trigger when 50% of the feature is visible in the viewport
});

// Observe each feature element
features.forEach(feature => observer.observe(feature));
