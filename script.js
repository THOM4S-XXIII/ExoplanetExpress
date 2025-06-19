// GLightbox init
const lightbox = GLightbox({
  selector: '.glightbox',
});

// FAQ toggle
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach((item) => {
  const btn = item.querySelector('.faq-question');
  btn.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});

// Scroll til top
const scrollTopBtn = document.querySelector('.scroll-top');
const heroSection = document.querySelector('header.hero');

// Beregn bunnen av hero-seksjonen
function getHeroBottom() {
  const rect = heroSection.getBoundingClientRect();
  return rect.top + window.scrollY + heroSection.offsetHeight;
}

// Start skjult
scrollTopBtn.style.display = 'none';

// Klikk event
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Scroll event
window.addEventListener('scroll', () => {
  scrollTopBtn.style.display =
    window.scrollY > getHeroBottom() ? 'flex' : 'none';
});

// Hamburger meny toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
