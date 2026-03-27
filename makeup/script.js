
/*
// script.js - Custom JavaScript for Roaa Makeup

// Initialize Supabase
const supabaseUrl = 'https://gonqcmvsobdgwgdfmviq.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdvbnFjbXZzb2JkZ3dnZGZtdmlxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM0OTQzMTIsImV4cCI6MjA4OTA3MDMxMn0.XRRVK5CB67TbhnCov6VFA45a5-bHnwqE1HAriEJ0Pyo';
const supabaseClient = window.supabase.createClient(supabaseUrl, supabaseKey);

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


// Location Logic
document.addEventListener('DOMContentLoaded', () => {
    const locationSelect = document.getElementById('locationSelect');
    const studioLink = document.getElementById('studioLocationLink');
    const addressField = document.getElementById('addressField');
    const addressInput = document.querySelector('input[name="address"]');

    if (locationSelect) {
        locationSelect.addEventListener('change', (e) => {
            if (e.target.value === 'At Roaa Studio') {
                studioLink.classList.remove('hidden');
                addressField.classList.add('hidden');
                addressInput.removeAttribute('required');
                addressInput.value = '';
            } else if (e.target.value === 'Home Service') {
                studioLink.classList.add('hidden');
                addressField.classList.remove('hidden');
                addressInput.setAttribute('required', 'true');
            } else {
                studioLink.classList.add('hidden');
                addressField.classList.add('hidden');
                addressInput.removeAttribute('required');
                addressInput.value = '';
            }
        });
    }
});

// Form Handling
const handleBooking = async (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button[type="submit"]');
    const success = document.getElementById('bookingSuccess');

    btn.innerHTML = 'Sending...';
    btn.disabled = true;
    btn.style.opacity = '0.5';

    try {
        const formData = new FormData(e.target);
        const data = {
            name: formData.get('name'),
            phone: formData.get('phone'),
            service: formData.get('service'),
            booking_date: formData.get('date'),
            notes: formData.get('notes') || null,
            location_type: formData.get('location_type'),
            address: formData.get('address') || null
        };

        const { error } = await supabaseClient
            .from('bookings')
            .insert([data]);

        if (error) throw error;

        btn.classList.add('hidden');
        success.classList.remove('hidden');
        e.target.reset();

        // Reset dynamic fields
        document.getElementById('studioLocationLink').classList.add('hidden');
        document.getElementById('addressField').classList.add('hidden');
        document.querySelector('input[name="address"]').removeAttribute('required');

    } catch (error) {
        console.error('Booking Error:', error);
        btn.innerHTML = 'Error! Try Again';
        btn.disabled = false;
        btn.style.opacity = '1';
        // Add fallback alert so user is aware something went wrong.
    }
};

const handleInstagramContact = () => {
    // Attempt to open DM link.
    const dmLink = "https://www.instagram.com/direct/t/108222313905572/";
    const profileLink = "https://www.instagram.com/roaa_artistry/";

    try {
        const win = window.open(dmLink, '_blank');
        if (!win) {
            window.location.href = profileLink;
        }
    } catch (err) {
        window.open(profileLink, '_blank');
    }
};

// Initial setup
if (slides.length > 0) showSlide(0);
// Auto rotate testimonials
if (slides.length > 0) setInterval(nextTestimonial, 6000);





let currentSlide = 0;
const slides = document.querySelectorAll('.testimonial-slide');

function showNextSlide(index) {
    slides.forEach((slide) => {
        // إخفاء فوري (بدون أنيميشن) لضمان عدم التداخل
        slide.style.display = 'none';
        slide.classList.remove('opacity-100', 'translate-x-0', 'z-10');
        slide.classList.add('opacity-0', 'translate-x-full');
    });

    // تحضير السلايد القادم
    const activeSlide = slides[index];
    activeSlide.style.display = 'block';

    // تفعيل الأنيميشن بعد لحظة بسيطة جداً
    setTimeout(() => {
        activeSlide.classList.remove('opacity-0', 'translate-x-full');
        activeSlide.classList.add('opacity-100', 'translate-x-0', 'z-10');
    }, 50);
}

function nextTestimonial() {
    currentSlide = (currentSlide + 1) % slides.length;
    showNextSlide(currentSlide);
}

// التأكد من أن الصفحة تظهر أول فيدباك فقط عند البداية
document.addEventListener('DOMContentLoaded', () => {
    // إخفاء كل السلايدات ما عدا الأول
    slides.forEach((s, i) => {
        if (i !== 0) {
            s.style.display = 'none';
            s.classList.add('opacity-0', 'translate-x-full');
        } else {
            s.style.display = 'block';
            s.classList.add('opacity-100', 'translate-x-0', 'z-10');
        }
    });
});







*/






// script.js - Custom JavaScript for Roaa Makeup

// 1. Initialize Supabase
const supabaseUrl = 'https://gonqcmvsobdgwgdfmviq.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdvbnFjbXZzb2JkZ3dnZGZtdmlxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM0OTQzMTIsImV4cCI6MjA4OTA3MDMxMn0.XRRVK5CB67TbhnCov6VFA45a5-bHnwqE1HAriEJ0Pyo';
const supabaseClient = window.supabase.createClient(supabaseUrl, supabaseKey);

// 2. Global Variables for Testimonials
let currentSlide = 0;
const slides = document.querySelectorAll('.testimonial-slide');

// --- Functions ---

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

// Mobile Menu Toggle
const toggleMenu = () => {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
};

// Gallery Filtering
const filterGallery = (category) => {
    const items = document.querySelectorAll('.gallery-item');
    const tabs = document.querySelectorAll('.gallery-tab');

    tabs.forEach(tab => {
        tab.classList.remove('bg-brand-pink-dark', 'text-white', 'font-bold');
        tab.classList.add('text-brand-muted');
        if (tab.innerText.toLowerCase().includes(category) || (category === 'all' && tab.innerText.toLowerCase().includes('all'))) {
            tab.classList.add('bg-brand-pink-dark', 'text-white', 'font-bold');
            tab.classList.remove('text-brand-muted');
        }
    });

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

// Testimonial Logic
function showNextSlide(index) {
    if (slides.length === 0) return;
    slides.forEach((slide) => {
        slide.style.display = 'none';
        slide.classList.remove('opacity-100', 'translate-x-0', 'z-10');
        slide.classList.add('opacity-0', 'translate-x-full');
    });

    const activeSlide = slides[index];
    activeSlide.style.display = 'block';
    setTimeout(() => {
        activeSlide.classList.remove('opacity-0', 'translate-x-full');
        activeSlide.classList.add('opacity-100', 'translate-x-0', 'z-10');
    }, 50);
}

function nextTestimonial() {
    if (slides.length === 0) return;
    currentSlide = (currentSlide + 1) % slides.length;
    showNextSlide(currentSlide);
}

// Form Handling
const handleBooking = async (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button[type="submit"]');
    const success = document.getElementById('bookingSuccess');

    btn.innerHTML = 'Sending...';
    btn.disabled = true;
    btn.style.opacity = '0.5';

    try {
        const formData = new FormData(e.target);
        const data = {
            name: formData.get('name'),
            phone: formData.get('phone'),
            service: formData.get('service'),
            booking_date: formData.get('date'),
            notes: formData.get('notes') || null,
            location_type: formData.get('location_type'),
            address: formData.get('address') || null
        };

        const { error } = await supabaseClient
            .from('bookings')
            .insert([data]);

        if (error) throw error;

        btn.classList.add('hidden');
        success.classList.remove('hidden');
        e.target.reset();

        document.getElementById('studioLocationLink').classList.add('hidden');
        document.getElementById('addressField').classList.add('hidden');
        document.querySelector('input[name="address"]').removeAttribute('required');

    } catch (error) {
        console.error('Booking Error:', error);
        btn.innerHTML = 'Error! Try Again';
        btn.disabled = false;
        btn.style.opacity = '1';
        alert("Something went wrong. Please try again or contact us on Instagram.");
    }
};

const handleInstagramContact = () => {
    const dmLink = "https://www.instagram.com/direct/t/108222313905572/";
    const profileLink = "https://www.instagram.com/roaa_artistry/";
    try {
        const win = window.open(dmLink, '_blank');
        if (!win) window.location.href = profileLink;
    } catch (err) {
        window.open(profileLink, '_blank');
    }
};

// --- Event Listeners ---

window.addEventListener('scroll', revealElements);
window.addEventListener('load', revealElements);

document.addEventListener('DOMContentLoaded', () => {
    // 1. Location Logic Setup
    const locationSelect = document.getElementById('locationSelect');
    const studioLink = document.getElementById('studioLocationLink');
    const addressField = document.getElementById('addressField');
    const addressInput = document.querySelector('input[name="address"]');

    if (locationSelect) {
        locationSelect.addEventListener('change', (e) => {
            if (e.target.value === 'At Roaa Studio') {
                studioLink.classList.remove('hidden');
                addressField.classList.add('hidden');
                addressInput.removeAttribute('required');
                addressInput.value = '';
            } else if (e.target.value === 'Home Service') {
                studioLink.classList.add('hidden');
                addressField.classList.remove('hidden');
                addressInput.setAttribute('required', 'true');
            } else {
                studioLink.classList.add('hidden');
                addressField.classList.add('hidden');
                addressInput.removeAttribute('required');
                addressInput.value = '';
            }
        });
    }

    // 2. Testimonials Initial State
    if (slides.length > 0) {
        slides.forEach((s, i) => {
            if (i !== 0) {
                s.style.display = 'none';
                s.classList.add('opacity-0', 'translate-x-full');
            } else {
                s.style.display = 'block';
                s.classList.add('opacity-100', 'translate-x-0', 'z-10');
            }
        });
        // 3. Auto rotate every 6 seconds
        setInterval(nextTestimonial, 6000);
    }
});