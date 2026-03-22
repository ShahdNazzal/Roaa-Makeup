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



function filterGallery(category, el) {

    // 🔹 شيل التظليل من الكل
    document.querySelectorAll('.gallery-tab').forEach(btn => {
        btn.classList.remove('active');
    });

    // 🔹 حط التظليل على الزر الحالي
    el.classList.add('active');

    // 🔹 كود الفلترة تبعك (خليه زي ما هو)




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


/*
// Testimonial Carousel
let currentSlide = 0;
const slides = document.querySelectorAll('.testimonial-slide');
*/







const slides = document.querySelectorAll('.testimonial-slide');
let currentSlide = 0;








function showSlide(index) {
    slides.forEach((slide, i) => {
        // إخفاء كل السلايدات ونقلهم لليمين
        slide.classList.remove('opacity-100', 'translate-x-0');
        slide.classList.add('opacity-0', 'translate-x-full');

        if (i === index) {
            // إظهار السلايد الحالي في المنتصف
            slide.classList.remove('opacity-0', 'translate-x-full');
            slide.classList.add('opacity-100', 'translate-x-0');
        }
    });
}

function nextTestimonial() {
    currentSlide = (currentSlide + 1) % slides.length; // بيرجع للصفر بعد الـ 10
    showSlide(currentSlide);
}

function prevTestimonial() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length; // بيرجع لـ 9 لو كنا عند الصفر
    showSlide(currentSlide);
}









slides.forEach((slide, i) => {
    if (i === index) {
        slide.classList.add('opacity-100', 'translate-x-0');
        slide.classList.remove('opacity-0', 'translate-x-full', '-translate-x-full');
        slide.style.zIndex = '10';
    } else if (i < index) {
        slide.classList.add('opacity-0', '-translate-x-full');
        slide.classList.remove('opacity-100', 'translate-x-0', 'translate-x-full');
        slide.style.zIndex = '0';
    } else {
        slide.classList.add('opacity-0', 'translate-x-full');
        slide.classList.remove('opacity-100', 'translate-x-0', '-translate-x-full');
        slide.style.zIndex = '0';
    }
});










/*
const nextTestimonial = () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
};

const prevTestimonial = () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
};

// الإعداد الأولي
showSlide(0);

// التدوير التلقائي
setInterval(nextTestimonial, 6000);
*/












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



/*
// Initial setup
showSlide(0);
// Auto rotate testimonials
setInterval(nextTestimonial, 6000);

*/





