let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

const sr = ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: false
});

sr.reveal('.hero-text', { delay: 200, origin: 'top' });
sr.reveal('.hero-img', { delay: 350, origin: 'top' });
sr.reveal('.icons', { delay: 450, origin: 'left' });
sr.reveal('.card', { delay: 200, origin: 'bottom' });
sr.reveal('.about-content', { delay: 200, origin: 'left' });

document.addEventListener("DOMContentLoaded", () => {
    const scrollDownElement = document.querySelector(".scroll-down");
    const footerElement = document.querySelector(".footer");

    window.addEventListener("scroll", () => {
        const footerPosition = footerElement.getBoundingClientRect().top;

        scrollDownElement.classList.toggle("hidden", footerPosition <= window.innerHeight);
    });
});

const nav = document.querySelector('.nav');
let lastScrollTop = 0;
const scrollThreshold = 50;

window.addEventListener('scroll', () => {
  const currentScrollTop = window.scrollY;

  if (currentScrollTop > lastScrollTop && currentScrollTop > scrollThreshold) {
    // Scrolling down, hide navigation
    nav.classList.add('nav-hidden');
  } else {
    // Scrolling up or at the top, show navigation
    nav.classList.remove('nav-hidden');
  }

  lastScrollTop = currentScrollTop;
});
