"use strict";
let counter = 0;
document.addEventListener("DOMContentLoaded", () => {
    const counterDisplay = document.getElementById("counterDisplay");
    const radiusInput = document.getElementById("radiusInput");
    const areaDisplay = document.getElementById("areaDisplay");
    const circumferenceDisplay = document.getElementById("circumferenceDisplay");
    const countdownInput = document.getElementById("countdownInput");
    const countdownDisplay = document.getElementById("countdownDisplay");
    const increaseBtn = document.getElementById("increaseButton");
    const decreaseBtn = document.getElementById("decreaseButton");
    const increaseByFiveBtn = document.getElementById("increaseByFiveButton");
    const calculateBtn = document.getElementById("calculateButton");
    const countdownBtn = document.getElementById("countdownButton");
    function updateCounterDisplay() {
        if (counterDisplay) {
            counterDisplay.innerText = `Counter: ${counter}`;
        }
    }
    function increaseCounter() {
        counter++;
        updateCounterDisplay();
    }
    function decreaseCounter() {
        counter--;
        updateCounterDisplay();
    }
    function increaseCounterByFive() {
        counter += 5;
        updateCounterDisplay();
    }
    function calculateCircle() {
        if (!radiusInput || !areaDisplay || !circumferenceDisplay)
            return;
        const radius = parseFloat(radiusInput.value);
        if (!isNaN(radius) && radius > 0) {
            const area = Math.PI * radius * radius;
            const circumference = 2 * Math.PI * radius;
            areaDisplay.innerText = `Area: ${area.toFixed(2)}`;
            circumferenceDisplay.innerText = `Circumference: ${circumference.toFixed(2)}`;
        }
        else {
            areaDisplay.innerText = "Area: Invalid input";
            circumferenceDisplay.innerText = "Circumference: Invalid input";
        }
    }
    let countdownInterval = null;
    function startCountdown() {
        if (!countdownInput || !countdownDisplay)
            return;
        let seconds = parseInt(countdownInput.value, 10);
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
//# sourceMappingURL=app.js.map