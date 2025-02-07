const yesButton = document.getElementById('yes');
const noButton = document.getElementById('no');
const happyMessage = document.getElementById('happyMessage');
const sadMessage = document.getElementById('sadMessage');
const confettiContainer = document.getElementById('confetti');
const poodle = document.getElementById('elvisImg');

yesButton.addEventListener('click', () => {
  happyMessage.style.display = 'block';
  confettiContainer.style.display = 'block';
  noButton.style.display = 'none';
  yesButton.style.display = 'none';
  createConfetti();
});

noButton.addEventListener('click', () => {
  sadMessage.style.display = 'block';
  noButton.textContent = 'Pretty please?';
  noButton.style.transform = 'scale(1.2)';
  poodle.src = './sadPoodle.webp'
});

function createConfetti() {
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement('span');
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.animationDelay = Math.random() * 2 + 's';
    confettiContainer.appendChild(confetti);
  }
}