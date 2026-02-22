let count = 0;
const munchSound = new Audio('https://assets.mixkit.co/active_storage/sfx/2019/2019-preview.mp3');

function collectHoney() {
  const bear = document.getElementById('bear');
  const counter = document.getElementById('counter');
  const honey = document.getElementById('honey');

  if (bear.classList.contains('wiggle')) return;

  // Sound plays on every tap
  munchSound.currentTime = 0;
  munchSound.play();

  // Start wiggle and honey grow effect
  bear.classList.add('wiggle');
  honey.style.transform = 'scale(1.3)';

  // Update Score
  count++;
  counter.innerText = "Honey Jars: " + count;

  // Reset after 300ms
  setTimeout(() => {
    bear.classList.remove('wiggle');
    honey.style.transform = 'scale(1)';
  }, 300);
}
