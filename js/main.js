// main.js - Custom JavaScript for Roaa Makeup

// Reveal elements on scroll
const revealElements = () => {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
            el.classList.add('active');
        }
    });
};
window.addEventListener('scroll', revealElements);
window.addEventListener('load', revealElements);

// Mobile Menu Toggle
const toggleMenu = () => {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
};

// Gallery Filtering
const filterGallery = (category) => {
    const items = document.querySelectorAll('.gallery-item');
    const tabs = document.querySelectorAll('.gallery-tab');
    
    // Update UI
    tabs.forEach(tab => {
        tab.classList.remove('bg-brand-pink-dark', 'text-white', 'font-bold');
        tab.classList.add('text-brand-muted');
        if (tab.innerText.toLowerCase().includes(category) || (category === 'all' && tab.innerText.toLowerCase().includes('all'))) {
            tab.classList.add('bg-brand-pink-dark', 'text-white', 'font-bold');
            tab.classList.remove('text-brand-muted');
        }
    });

    // Filter logic
    items.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'scale(0.9)';
        setTimeout(() => {
            if (category === 'all' || item.classList.contains(category)) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, 50);
            } else {
                item.style.display = 'none';
            }
        }, 300);
    });
};

// Testimonial Carousel
let currentSlide = 0;
const slides = document.querySelectorAll('.testimonial-slide');

const showSlide = (index) => {
    slides.forEach((slide, i) => {
        slide.classList.remove('opacity-100', 'translate-x-0');
        slide.classList.add('opacity-0', 'translate-x-full');
        if (i === index) {
            slide.classList.remove('opacity-0', 'translate-x-full');
            slide.classList.add('opacity-100', 'translate-x-0');
        } else if (i < index) {
            slide.classList.add('opacity-0', '-translate-x-full');
        }
    });
};

const nextTestimonial = () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
};

const prevTestimonial = () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
};

// Form Handling
const handleBooking = (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    const success = document.getElementById('bookingSuccess');
    
    btn.innerHTML = 'Sending...';
    btn.disabled = true;
    btn.style.opacity = '0.5';

    setTimeout(() => {
        btn.classList.add('hidden');
        success.classList.remove('hidden');
        e.target.reset();
    }, 1500);
};

// Initial setup
showSlide(0);
// Auto rotate testimonials
setInterval(nextTestimonial, 6000);
