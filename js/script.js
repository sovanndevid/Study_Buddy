// Smooth scroll to #services section
document.addEventListener('DOMContentLoaded', () => {
  const exploreBtn = document.getElementById('exploreBtn');
  const servicesSection = document.getElementById('services');

  if (exploreBtn && servicesSection) {
    exploreBtn.addEventListener('click', () => {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Update current year in footer
  const currentYear = document.getElementById('currentYear');
  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }
});

// Toggle mobile menu when hamburger icon is clicked
function toggleMenu(hamburger) {
  hamburger.classList.toggle('open');
  const navLinks = document.querySelector('.nav-links');
  if (navLinks) {
    navLinks.classList.toggle('active');
  }
}
