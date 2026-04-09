// ── Hamburger menu ──────────────────────────────────────────
const hamMenuBtn      = document.querySelector('.header__main-ham-menu-cont');
const smallMenu       = document.querySelector('.header__sm-menu');
const hamMenuImg      = document.querySelector('.header__main-ham-menu');
const hamMenuCloseImg = document.querySelector('.header__main-ham-menu-close');
const smMenuLinks     = document.querySelectorAll('.header__sm-menu-link');

if (hamMenuBtn) {
  hamMenuBtn.addEventListener('click', () => {
    const isOpen = smallMenu.classList.contains('header__sm-menu--active');
    smallMenu.classList.toggle('header__sm-menu--active', !isOpen);
    hamMenuImg.classList.toggle('d-none', !isOpen);
    hamMenuCloseImg.classList.toggle('d-none', isOpen);
  });
}

smMenuLinks.forEach(link => {
  link.addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active');
    hamMenuImg.classList.remove('d-none');
    hamMenuCloseImg.classList.add('d-none');
  });
});

// ── Logo → home ──────────────────────────────────────────────
const logoContainer = document.querySelector('.header__logo-container');
if (logoContainer) {
  logoContainer.addEventListener('click', () => {
    location.href = 'index.html';
  });
}

// ── Header: transparent → glass on scroll ───────────────────
const header = document.getElementById('header');
if (header) {
  const onScroll = () => {
    header.classList.toggle('header--scrolled', window.scrollY > 60);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load
}

// ── Scroll reveal (IntersectionObserver) ────────────────────
const revealEls = document.querySelectorAll('.reveal');
if (revealEls.length && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealEls.forEach(el => observer.observe(el));
} else {
  // Fallback: show all immediately if no IntersectionObserver support
  revealEls.forEach(el => el.classList.add('visible'));
}
