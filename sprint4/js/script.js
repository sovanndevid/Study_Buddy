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

  // To-Do list
  const taskInput = document.getElementById('taskInput');
  const addTaskButton = document.getElementById('addTaskButton');
  const taskList = document.getElementById('taskList');

  taskInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      addTaskButton.click();
    }
  });  

  addTaskButton?.addEventListener('click', () => {
    if (taskInput.value.trim() !== '') {
      const li = document.createElement('li');
      li.innerHTML = `
        <span>${taskInput.value}</span>
        <div>
          <button class="edit">Edit</button>
          <button class="delete">Delete</button>
        </div>
      `;

      li.querySelector('span').addEventListener('click', () => {
        li.classList.toggle('completed');
      });

      li.querySelector('.edit').addEventListener('click', () => {
        const newTask = prompt('Edit your task:', li.querySelector('span').innerText);
        if (newTask !== null && newTask.trim() !== '') {
          li.querySelector('span').innerText = newTask;
        }
      });

      li.querySelector('.delete').addEventListener('click', () => {
        li.remove();
      });

      taskList.appendChild(li);
      taskInput.value = '';
    }
  });

  // Dark mode toggle
  const toggleButton = document.getElementById("darkModeToggle");
  if (toggleButton) {
    toggleButton.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      toggleButton.textContent = document.body.classList.contains("dark-mode")
        ? "☀️ Light Mode"
        : "🌙 Dark Mode";
    });
  }
});
