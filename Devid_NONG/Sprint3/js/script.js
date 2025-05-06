function openModal(id) {
  document.getElementById(id).style.display = 'flex';
}

function closeModal(id) {
  document.getElementById(id).style.display = 'none';

  // Reset form and feedback if it's the membership modal
  if (id === "membershipModal") {
    const form = document.querySelector("#membershipModal form");
    form.reset();
    document.getElementById("form-feedback").style.display = "none";
    form.style.display = "block";
  }
}

function outsideClick(event, id) {
  const modal = document.getElementById(id);
  if (event.target === modal) {
    closeModal(id);
  }
}

function toggleMenu(el) {
  el.classList.toggle("open");
  document.querySelector(".nav-links").classList.toggle("active");
}

// Handle membership form
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#membershipModal form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Show thank-you message
    document.getElementById("form-feedback").style.display = "block";
    form.style.display = "none";

    // Auto-close modal after 3 seconds (optional)
    setTimeout(() => {
      closeModal("membershipModal");
    }, 3000);
  });
});
