document.addEventListener("DOMContentLoaded", () => {
  // Flip cards
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    card.addEventListener("click", () => {
      card.classList.toggle("flip");
    });
  });

  // Explore scroll
  const exploreBtn = document.getElementById('exploreBtn');
  const services = document.getElementById('Features');
  if (exploreBtn && services) {
    exploreBtn.addEventListener('click', () => {
      services.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Footer year
  const currentYear = document.getElementById("currentYear");
  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  // Mobile menu
  window.toggleMenu = function (hamburger) {
    hamburger.classList.toggle("open");
    const navLinks = document.querySelector(".nav-links");
    if (navLinks) navLinks.classList.toggle("active");
  };

  




