// script.js

document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('section, .story-section');

    const observerOptions = {
        root: null,
        threshold: 0.15,
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // triggers animation only once
            }
        });
    }, observerOptions);

    animatedElements.forEach(element => {
        element.classList.add('hidden');
        observer.observe(element);
    });
});