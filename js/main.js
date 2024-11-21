// Mobile Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

menuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
    menuBtn.classList.toggle('active');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile menu if open
            nav.classList.remove('active');
            menuBtn.classList.remove('active');
        }
    });
});

// Marquee Animation
const marquee = document.querySelector('.marquee');
if (marquee) {
    marquee.addEventListener('mouseover', function() {
        this.style.animationPlayState = 'paused';
    });
    
    marquee.addEventListener('mouseout', function() {
        this.style.animationPlayState = 'running';
    });
}

// Stats Counter Animation
const stats = document.querySelectorAll('.stat-number');
const statsSection = document.querySelector('.about-stats');

function animateStats() {
    stats.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        const duration = 2000;
        const start = 0;
        const increment = (target - start) / (duration / 16);

        let current = start;
        const animate = () => {
            current += increment;
            if (current < target) {
                stat.textContent = Math.round(current);
                requestAnimationFrame(animate);
            } else {
                stat.textContent = target;
            }
        };
        animate();
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px'
};

// Stats Observer
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateStats();
            statsObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

if (statsSection) {
    statsObserver.observe(statsSection);
}

// Reveal Animation for Cards
const revealElements = document.querySelectorAll('.excellence-card, .faculty-card, .event-card, .course-card');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
        }
    });
}, {
    threshold: 0.1
});

revealElements.forEach(element => {
    revealObserver.observe(element);
});

// Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Add your form submission logic here
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
}

// Newsletter Form
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Add your newsletter subscription logic here
        alert('Thank you for subscribing to our newsletter!');
        this.reset();
    });
}