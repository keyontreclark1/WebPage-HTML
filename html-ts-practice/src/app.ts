let counter: number = 0;

document.addEventListener("DOMContentLoaded", () => {
  const counterDisplay = document.getElementById("counterDisplay");
  const radiusInput = document.getElementById("radiusInput") as HTMLInputElement | null;
  const areaDisplay = document.getElementById("areaDisplay");
  const circumferenceDisplay = document.getElementById("circumferenceDisplay");
  const countdownInput = document.getElementById("countdownInput") as HTMLInputElement | null;
  const countdownDisplay = document.getElementById("countdownDisplay");

  const increaseBtn = document.getElementById("increaseButton");
  const decreaseBtn = document.getElementById("decreaseButton");
  const increaseByFiveBtn = document.getElementById("increaseByFiveButton");
  const calculateBtn = document.getElementById("calculateButton");
  const countdownBtn = document.getElementById("countdownButton");

  function updateCounterDisplay(): void {
    if (counterDisplay) {
      counterDisplay.innerText = `Counter: ${counter}`;
    }
  }

  function increaseCounter(): void {
    counter++;
    updateCounterDisplay();
  }

  function decreaseCounter(): void {
    counter--;
    updateCounterDisplay();
  }

  function increaseCounterByFive(): void {
    counter += 5;
    updateCounterDisplay();
  }

  function calculateCircle(): void {
    if (!radiusInput || !areaDisplay || !circumferenceDisplay) return;

    const radius: number = parseFloat(radiusInput.value);
    if (!isNaN(radius) && radius > 0) {
      const area: number = Math.PI * radius * radius;
      const circumference: number = 2 * Math.PI * radius;
      areaDisplay.innerText = `Area: ${area.toFixed(2)}`;
      circumferenceDisplay.innerText = `Circumference: ${circumference.toFixed(2)}`;
    } else {
      areaDisplay.innerText = "Area: Invalid input";
      circumferenceDisplay.innerText = "Circumference: Invalid input";
    }
  }

  let countdownInterval: number | null = null;

  function startCountdown(): void {
    if (!countdownInput || !countdownDisplay) return;

    let seconds: number = parseInt(countdownInput.value, 10);
    if (isNaN(seconds) || seconds < 0) {
      countdownDisplay.innerText = "Invalid input";
      return;
    }

    if (countdownInterval !== null) {
      clearInterval(countdownInterval);
    }

    countdownDisplay.innerText = `Countdown: ${seconds}`;
    countdownInterval = window.setInterval(() => {
      seconds--;
      countdownDisplay.innerText = `Countdown: ${seconds}`;
      if (seconds <= 0) {
        if (countdownInterval !== null) {
          clearInterval(countdownInterval);
        }
        countdownDisplay.innerText = "Countdown finished!";
      }
    }, 1000);
  }

  // Attach Event Listeners
  increaseBtn?.addEventListener("click", increaseCounter);
  decreaseBtn?.addEventListener("click", decreaseCounter);
  increaseByFiveBtn?.addEventListener("click", increaseCounterByFive);
  calculateBtn?.addEventListener("click", calculateCircle);
  countdownBtn?.addEventListener("click", startCountdown);
});