// Function to open the modal
function openModal(id) {
  const modal = document.getElementById(id);
  modal.style.display = 'flex';
}

// Function to close the modal
function closeModal(id) {
  const modal = document.getElementById(id);
  modal.style.display = 'none';
}

// Function to toggle the mobile menu
function toggleMenu(hamburger) {
  hamburger.classList.toggle('open');
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}

// Close modal when clicking outside of the modal content
window.onclick = function (event) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach((modal) => {
    if (event.target === modal) {
      closeModal(modal.id);
    }
  });
}
