// show menu
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

// active and remove menu

const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
//   Active link
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
//   Remove menu mobile
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));


// SCROLL REVEAL ANIMATION
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});


document.getElementById("submitButton").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission

    const emailInput = document.getElementById("emailInput");
    const messageInput = document.getElementById("messageInput");

    // Validate email input
    if (!validateEmail(emailInput.value)) {
        alert("Please enter a valid email address.");
        emailInput.focus();
        return;
    }

    // Check if message input is empty
    if (messageInput.value.trim() === "") {
        alert("Please enter a message.");
        messageInput.focus();
        return;
    }

    // Simulate email submission
    alert("Email sent successfully!");

    // Clear form fields after successful submission
    emailInput.value = "";
    messageInput.value = "";
});

function validateEmail(email) {
    // Regular expression pattern to validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}








/*SCROLL HOME*/
sr.reveal('.home__title',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.home__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 

/*SCROLL ABOUT*/
sr.reveal('.about__img',{}); 
sr.reveal('.about__subtitle',{delay: 400}); 
sr.reveal('.about__text',{delay: 400}); 

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle',{}); 
sr.reveal('.skills__text',{}); 
sr.reveal('.skills__data',{interval: 200}); 
sr.reveal('.skills__img',{delay: 600});

/*SCROLL PROJECT*/
sr.reveal('.project__img',{interval: 200}); 

/*SCROLL CONTACT*/
sr.reveal('.contact__input',{interval: 200}); 






