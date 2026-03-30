// Sticky nav shrink on scroll
const header = document.getElementById('site-header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.getElementById('site-nav');

navToggle.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

// Close mobile nav on anchor link click
siteNav.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', false);
  });
});

// Testimonial carousel
(function() {
  const carousel = document.getElementById('testimonial-carousel');
  if (!carousel) return;

  const slides = Array.from(carousel.querySelectorAll('.testimonial'));
  const dots = Array.from(document.querySelectorAll('.pager-dot'));
  let current = 0;
  let timer;

  function showSlide(index) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
  }

  function startAuto() {
    timer = setInterval(() => showSlide(current + 1), 6000);
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      clearInterval(timer);
      showSlide(i);
      startAuto();
    });
  });

  startAuto();
})();

// Language switcher dropdown
const langSwitcher = document.querySelector('.lang-switcher');
if (langSwitcher) {
  const toggle = langSwitcher.querySelector('.lang-switcher-toggle');
  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = langSwitcher.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
  });
  document.addEventListener('click', () => {
    langSwitcher.classList.remove('open');
    toggle.setAttribute('aria-expanded', false);
  });
}

// Smooth scroll offset for fixed nav
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});
