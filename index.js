// Show menu
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);
    
    if (toggle && nav) {
    toggle.addEventListener('click', () => {
    nav.classList.toggle('show');
    });
    }
    };
    
    showMenu('nav-toggle', 'nav-menu');
    
    // Active and remove menu
    const navLinks = document.querySelectorAll('.nav__link');
    
    function linkAction() {
    navLinks.forEach(n => n.classList.remove('active'));
    this.classList.add('active');
    
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
    }
    
    navLinks.forEach(n => n.addEventListener('click', linkAction));
    
    // Scroll reveal animation
    const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
    });
    
    // Email form submission
    document.getElementById('submitButton').addEventListener('click', function(event) {
    event.preventDefault();
    
    const emailInput = document.getElementById('emailInput');
    const messageInput = document.getElementById('messageInput');
    
    if (!validateEmail(emailInput.value)) {
    alert('Please enter a valid email address.');
    emailInput.focus();
    return;
    }
    
    if (messageInput.value.trim() === '') {
    alert('Please enter a message.');
    messageInput.focus();
    return;
    }
    
    alert('Email sent successfully!');
    
    emailInput.value = '';
    messageInput.value = '';
    });
    
    function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
    }
    
    // Scroll reveal animations
    sr.reveal('.home__title');
    sr.reveal('.button', { delay: 200 });
    sr.reveal('.home__img', { delay: 400 });
    sr.reveal('.home__social-icon', { interval: 200 });
    sr.reveal('.about__img');
    sr.reveal('.about__subtitle', { delay: 400 });
    sr.reveal('.about__text', { delay: 400 });
    sr.reveal('.skills__subtitle');
    sr.reveal('.skills__text');
    sr.reveal('.skills__data', { interval: 200 });
    sr.reveal('.skills__img', { delay: 600 });
    sr.reveal('.project__img', { interval: 200 });
    sr.reveal('.contact__input', { interval: 200 });