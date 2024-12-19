document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentSlide = 0;

    // Show first slide
    slides[currentSlide].classList.add('active');

    // Function to show slide
    function showSlide(index) {
        // Remove active class from current slide
        slides[currentSlide].classList.remove('active');
        
        // Update current slide index
        currentSlide = index;
        
        // Handle wrapping
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }
        
        // Show new slide
        slides[currentSlide].classList.add('active');
    }

    // Previous button click
    prevBtn.addEventListener('click', () => {
        showSlide(currentSlide - 1);
    });

    // Next button click
    nextBtn.addEventListener('click', () => {
        showSlide(currentSlide + 1);
    });

    // Auto advance slides
    setInterval(() => {
        showSlide(currentSlide + 1);
    }, 5000);

    // Mobile Menu Toggle
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', function() {
            menuBtn.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!navLinks.contains(event.target) && !menuBtn.contains(event.target)) {
                menuBtn.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuBtn.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }
});