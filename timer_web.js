let timer;
let totalSeconds = 0;
let isRunning = false;

function updateDisplay() {
    let hrs = Math.floor(totalSeconds / 3600);
    let mins = Math.floor((totalSeconds % 3600) / 60);
    let secs = totalSeconds % 60;
    document.getElementById("display").textContent = `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            if (totalSeconds > 0) {
                totalSeconds--;
                updateDisplay();
            } else {
                clearInterval(timer);
                document.getElementById("alert").play();
            }
        }, 1000);
    }
}

function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    totalSeconds = 0;
    updateDisplay();
}

function stopTimer() {
    clearInterval(timer);
    isRunning = false;
}

function setTimer(minutes) {
    resetTimer();
    totalSeconds = minutes * 60;
    updateDisplay();
}