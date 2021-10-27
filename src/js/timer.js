let timerCount;
let number = 0;
let flag = true


function timerStart(element) {
    if (flag) {
        timerCount = setInterval(() => {
            number++;
            element.textContent = (number / 100).toFixed(0)
            if (number === 6000) {
                timerStop(element);
            }
        }, 10)
        flag = false;
    }
}

function timerStop(element) {
    flag = true;
    clearInterval(timerCount);
    number = 0;
    element.textContent = number
}



export {
    timerStart,
    timerStop
};