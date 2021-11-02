let timerCount;
let number = 0;
let flag = true
const timeHolder = document.querySelector('.header__timer-counting');

function timerStart() {
    if (flag) {
        timerCount = setInterval(() => {
            number++;
            timeHolder.textContent = (number / 100).toFixed(0)
            if (number === 6000) {
                timerStop();
            }
        }, 10)
        flag = false;
    }
}

function timerStop() {
    flag = true;
    clearInterval(timerCount);
    number = 0;
    timeHolder.textContent = number
}

export {
    timerStart,
    timerStop
};