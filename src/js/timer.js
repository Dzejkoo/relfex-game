let timerCount;
let number = 0;
let flag = true


function timerStart(element) {
    if (flag) {
        timerCount = setInterval(() => {
            number++;
            element.textContent = (number / 100).toFixed(0)
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
}



export {
    timerStart,
    timerStop
};