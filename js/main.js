// OUBA Engineers & Consultants LLC — Main JS

// Mobile Nav
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// Scroll animations
const fadeEls = document.querySelectorAll('.fade-up');
if (fadeEls.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  fadeEls.forEach(el => observer.observe(el));
}

// Service card staggered delay
document.querySelectorAll('.service-card').forEach(card => {
  const delay = card.dataset.delay || 0;
  card.style.transitionDelay = (delay * 80) + 'ms';
  card.classList.add('fade-up');
});

// Re-run observer for dynamically marked cards
const allFade = document.querySelectorAll('.fade-up:not(.visible)');
if (allFade.length) {
  const obs2 = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs2.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  allFade.forEach(el => obs2.observe(el));
}
