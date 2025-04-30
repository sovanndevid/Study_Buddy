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
  const savedList = document.getElementById('savedTasks'); // Optional new list to display saved tasks
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  let changesMade = false;

  function updateTaskList() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <span><strong>${index + 1}.</strong> ${task}</span>
        <div>
          <button class="edit">Edit</button>
          <button class="delete">Delete</button>
        </div>
      `;

      li.querySelector('span').addEventListener('click', () => {
        li.classList.toggle('completed');
      });

      li.querySelector('.edit').addEventListener('click', () => {
        const newTask = prompt('Edit your task:', task);
        if (newTask && newTask.trim()) {
          tasks[index] = newTask.trim();
          updateTaskList();
          changesMade = true;
        }
      });

      li.querySelector('.delete').addEventListener('click', () => {
        tasks.splice(index, 1);
        updateTaskList();
        changesMade = true;
      });

      taskList.appendChild(li);
    });
  }

  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    changesMade = false;
  }

  taskInput.addEventListener("input", () => {
    changesMade = true;
  });

  taskInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      addTaskButton.click();
    }
  });

  addTaskButton?.addEventListener('click', () => {
    const value = taskInput.value.trim();
    if (value !== '') {
      tasks.push(value);
      updateTaskList();
      taskInput.value = '';
      changesMade = true;
    }
  });

  window.onbeforeunload = function () {
    if (changesMade) {
      return "You have unsaved changes. Do you really want to leave?";
    }
  };

  // Optional: display saved tasks separately if needed
  function displaySavedTasks() {
    if (savedList) {
      const saved = JSON.parse(localStorage.getItem("tasks")) || [];
      savedList.innerHTML = saved.map((task, i) => `<li><strong>${i + 1}.</strong> ${task}</li>`).join('');
    }
  }

  // Basic autocomplete (example with sample words)
  const suggestions = ["study", "assignment", "homework", "project", "submit"].sort();
  taskInput.addEventListener("input", function () {
    const match = suggestions.find(word => word.startsWith(this.value.toLowerCase()));
    if (match && this.value !== match) {
      this.value = match;
      this.setSelectionRange(this.value.length, this.value.length);
    }
  });

  updateTaskList();
  displaySavedTasks();

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
