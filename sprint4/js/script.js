document.addEventListener("DOMContentLoaded", () => {
  // Flip cards on click
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    card.addEventListener("click", () => {
      card.classList.toggle("flip");
    });
  });

  // Explore Features smooth scroll (ensure there's an ID "services")
  const exploreBtn = document.getElementById('exploreBtn');
  const services = document.getElementById('services');
  if (exploreBtn && services) {
    exploreBtn.addEventListener('click', () => {
      services.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Footer year update
  const currentYear = document.getElementById("currentYear");
  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  // Mobile menu toggle
  window.toggleMenu = function (hamburger) {
    hamburger.classList.toggle("open");
    const navLinks = document.querySelector(".nav-links");
    if (navLinks) navLinks.classList.toggle("active");
  };
});
// darkmode
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("darkModeToggle");
  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    toggleButton.textContent = document.body.classList.contains("dark-mode")
      ? "☀️ Light Mode"
      : "🌙 Dark Mode";
  });
});
