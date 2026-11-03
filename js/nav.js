const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('max-h-0');
  navLinks.classList.toggle('max-h-96');
  navLinks.classList.toggle('opacity-0');
  navLinks.classList.toggle('opacity-100');
  navLinks.classList.toggle('pt-4');

  const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!isOpen));
});
