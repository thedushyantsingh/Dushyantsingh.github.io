// toggle icon nav bar 
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// scroll sectiom  active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
  // Add active class to current navigation link
  let current = '';
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('href').slice(1) === current) {
      link.classList.add('active');
    }
  });

  // Make navbar sticky
  if (window.pageYOffset > 100) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
  
  
  
  // remove toggle icon  and navbar when click navbar link (scroll)
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
  
});


// scroll reveal
ScrollReveal({ 
    // reset: true,
    distance: '80px', 
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// typed js 
const typed =  new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Youtuber', 'Blogger', 'Freelancer' ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// send button 
const sendButton = document.getElementById('send-button');
const contactForm = document.querySelector('.contact form');

contactForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the form from submitting normally

  // Add the "sending" class to the button
  sendButton.classList.add('sending');

  // Simulate sending the message (replace this with your actual sending code)
  setTimeout(function () {
    // Remove the "sending" class from the button
    sendButton.classList.remove('sending');
  }, 3000); // Wait for 3 seconds to simulate sending
});

// buton to top 

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("back-to-top-btn").style.display = "block";
    } else {
        document.getElementById("back-to-top-btn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

document.getElementById("back-to-top-btn").addEventListener("click", topFunction);
