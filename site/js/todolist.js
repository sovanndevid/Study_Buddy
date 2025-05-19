// To-Do list
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const saveButton = document.getElementById('saveTaskButton');
const taskList = document.getElementById('taskList');
const savedList = document.getElementById('savedTasks');
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

if (saveButton) {
  saveButton.addEventListener("click", () => {
    saveTasks();
    displaySavedTasks();
    alert("Tasks saved!");
  });
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

function displaySavedTasks() {
  if (savedList) {
    const saved = JSON.parse(localStorage.getItem("tasks")) || [];
    savedList.innerHTML = saved.map((task, i) => `<li><strong>${i + 1}.</strong> ${task}</li>`).join('');
  }
}

updateTaskList();
displaySavedTasks();
