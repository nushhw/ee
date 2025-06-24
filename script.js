let ee = 0;
let droneCount = 0;

const eeDisplay = document.getElementById('ee');
const droneDisplay = document.getElementById('droneCount');
const coreButton = document.getElementById('coreClick');
const core = document.getElementById('core');
const buyDroneBtn = document.getElementById('buyDrone');

function updateDisplay() {
  eeDisplay.textContent = Math.floor(ee);
  droneDisplay.textContent = droneCount;
}

core.addEventListener('click', () => {
  ee++;
  updateDisplay();
});

coreButton.addEventListener('click', () => {
  ee++;
  updateDisplay();
});

buyDroneBtn.addEventListener('click', () => {
  if (ee >= 10) {
    ee -= 10;
    droneCount++;
    updateDisplay();
  }
});

setInterval(() => {
  ee += droneCount;
  updateDisplay();
}, 1000);
