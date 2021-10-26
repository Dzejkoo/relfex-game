let timerCount;
let number = 0;


function timerStart(element) {
    timerCount = setInterval(() => {
        number++;
        element.textContent = (number / 100).toFixed(0)
        if (number === 6000) {
            timerStop();
        }
    }, 10)
}

function timerStop() {
    clearInterval(timerCount);
}



export {
    timerStart,
    timerStop
};