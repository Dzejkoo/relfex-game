import './sass/main.scss';
import {
    timerStart
} from './js/timer';
import {
    drawSquare,
    timeToRemove
} from './js/draws';
import {
    createSquares
} from './js/createSquare';
import {
    addPoints,
    removeLife,
} from './js/points';




const buttonStart = document.querySelector('.navigation__start');
let numberOfSqures = 25;
createSquares(numberOfSqures);
const squares = [...document.querySelectorAll('.game-place__square')];


function game() {
    squares.forEach(el => el.addEventListener('click', (e) => {
        let ifIncludes = e.target.className.includes('game-place__square--active');
        console.log(e.target.className)
        if (ifIncludes) {
            clearInterval(timeToRemove)
            el.classList.remove('game-place__square--active');
            drawSquare();
            addPoints();
        } else {
            clearInterval(timeToRemove)
            squares.forEach(el => el.classList.remove('game-place__square--active'))
            drawSquare();
            removeLife(squares);
        }
    }))
}

buttonStart.addEventListener('click', () => {
    drawSquare();
    timerStart();
})

game();