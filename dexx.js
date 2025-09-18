// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// Close menu when link clicked (mobile UX)
document.querySelectorAll('#nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('show');
  });
});

// Language switcher (demo toggle, no full i18n)
const langEn = document.getElementById('lang-en');
const langId = document.getElementById('lang-id');

langEn.addEventListener('click', () => {
  langEn.classList.add('active');
  langId.classList.remove('active');
  // Implement i18n here if needed
});

langId.addEventListener('click', () => {
  langId.classList.add('active');
  langEn.classList.remove('active');
  // Implement i18n here if needed
});

// Scroll fade-in animation on sections
const fadeSections = document.querySelectorAll('.fade-in');
const fadeInOnScroll = () => {
  fadeSections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      section.classList.add('visible');
    }
  });
};
window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('load', fadeInOnScroll);

// "Get in Touch" button scroll to contact section
document.getElementById('contact-btn').addEventListener('click', () => {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});