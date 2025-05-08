// Load confetti library
const confettiScript = document.createElement('script');
confettiScript.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.0/dist/confetti.browser.min.js';
document.head.appendChild(confettiScript);

document.addEventListener('DOMContentLoaded', function () {
  const sayHiBtn = document.getElementById('sayHiBtn');
  const backBtn = document.getElementById('backBtn');
  const nextBtn = document.getElementById('nextBtn');

  const mainCard = document.getElementById('main-card');
  const infoCard = document.getElementById('info-card');
  const celebrationCard = document.getElementById('celebration-card');
  const sparkleCanvas = document.getElementById('sparkle-canvas');

  let sparkleInterval;

  sayHiBtn.addEventListener('click', function () {
    mainCard.classList.add('hidden');
    infoCard.classList.remove('hidden');
    sparkleCanvas.classList.remove('hidden');

    setTimeout(() => {
      launchConfetti();
      sparkleInterval = setInterval(launchSparkles, 500);
    }, 300);
  });

  nextBtn.addEventListener('click', function () {
    infoCard.classList.add('hidden');
    celebrationCard.classList.remove('hidden');

    setTimeout(() => {
      launchConfetti();
      sparkleInterval = setInterval(launchSparkles, 500);
    }, 300);
  });

  backBtn.addEventListener('click', function () {
    celebrationCard.classList.add('hidden');
    mainCard.classList.remove('hidden');
    sparkleCanvas.classList.add('hidden');
    clearInterval(sparkleInterval);
  });
});

function launchConfetti() {
  if (typeof confetti !== 'undefined') {
    confetti({
      particleCount: 200,
      spread: 100,
      origin: { y: 0.6 }
    });
  }
}

function launchSparkles() {
  if (typeof confetti !== 'undefined') {
    confetti({
      particleCount: 6,
      spread: 70,
      origin: {
        x: Math.random(),
        y: Math.random() * 0.5
      },
      colors: ['#f4a8fb', '#81d4fa', '#b39ddb', '#ffcc80'],
      zIndex: 999
    });
  }
}
