const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

const navLinks = document.querySelectorAll('.nav-link');

const LinkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
};

navLinks.forEach(navLink => navLink.addEventListener('click', LinkAction));

const blurHeader = () => {
    const header = document.getElementById('header');
    this.scrollY >= 50 ? header.classList.add('blur-header') 
                       : header.classList.remove('blur-header');
};
window.addEventListener('scroll', blurHeader);

const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up');
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link');
        } else {
            sectionsClass.classList.remove('active-link');
        }
    });
};

window.addEventListener('scroll', scrollActive);





const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 3000,
  delay: 400,
//  reset: true // animation repeat
})

sr.reveal('.home-data, .explore-data, .explore-user, .footer-container')
sr.reveal('.home-card', {delay:600, distance: '100px', interval: 100})
sr.reveal('.about-data .join-image', {origin: 'right'})
sr.reveal('.about-image .join-data', {origin: 'left'})
sr.reveal('.popular-card', {interval: 200})
