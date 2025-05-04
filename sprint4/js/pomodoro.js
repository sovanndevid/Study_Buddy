let sessionTime = 0.05;
let breakTime = 5;
let timeLeft = sessionTime * 60;
let timer;
let isSession = true;
let isRunning = false;

const timeDisplay = document.getElementById("time");
const modeDisplay = document.getElementById("mode");
const modal = document.getElementById("sessionModal");
const modalTitle = document.getElementById("modalTitle");

const circle = document.querySelector(".progress-ring__circle");
const radius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = circumference;

function updateTimeDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timeDisplay.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

function updateCircle() {
  const total = isSession ? sessionTime * 60 : breakTime * 60;
  const percent = timeLeft / total;
  circle.style.strokeDashoffset = circumference * (1 - percent);
}

function startTimer() {
  if (!isRunning) {
    timer = setInterval(() => {
      timeLeft--;
      updateTimeDisplay();
      updateCircle();

      if (timeLeft <= 0) {
        clearInterval(timer);
        isRunning = false;
        document.querySelector(".center-text").classList.remove("pulsing");
        modalTitle.textContent = isSession ? "Session Complete!" : "Break Complete!";
        modal.style.display = "flex";
      }
    }, 1000);
    isRunning = true;
    document.querySelector(".center-text").classList.add("pulsing");
  }
}

function pauseTimer() {
  clearInterval(timer);
  isRunning = false;
  document.querySelector(".center-text").classList.remove("pulsing");
}

function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  timeLeft = isSession ? sessionTime * 60 : breakTime * 60;
  updateTimeDisplay();
  updateCircle();
  document.querySelector(".center-text").classList.remove("pulsing");
}

function setTime(session, brk) {
  sessionTime = session;
  breakTime = brk;
  isSession = true;
  timeLeft = session * 60;
  modeDisplay.textContent = "Session";
  updateTimeDisplay();
  updateCircle();
  resetTimer();
}

// Modal close + switch mode
function closeModal() {
  modal.style.display = "none";
  isSession = !isSession;
  modeDisplay.textContent = isSession ? "Session" : "Break";
  timeLeft = isSession ? sessionTime * 60 : breakTime * 60;
  updateTimeDisplay();
  updateCircle();
}

updateTimeDisplay();
updateCircle();
