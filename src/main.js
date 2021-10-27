import './sass/main.scss';
import {
    timerStart,
    timerStop
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
    endGame
} from './js/points';





const timeHolder = document.querySelector('.header__timer-counting');
const buttonStart = document.querySelector('.navigation__start');
let numberOfSqures = 25;
createSquares(numberOfSqures);
const squares = [...document.querySelectorAll('.game-place__square')];







function game() {
    squares.forEach((el) => el.addEventListener('click', (e) => {
        let ifIncludes = e.target.classList.includes('game-place__square--active');
        if (ifIncludes) {
            clearInterval(timeToRemove)
            el.classList.remove('game-place__square--active');
            drawSquare();
            addPoints();
        } else {
            clearInterval(timeToRemove)
            squares.forEach(el => el.classList.remove('game-place__square--active'))
            removeLife(squares);
            drawSquare();
            if (endGame) {
                timerStop(timeHolder);
                squares.forEach(el => el.classList.remove('game-place__square--active'))
                clearInterval(timeToRemove)
            }
        }
    }))
}

buttonStart.addEventListener('click', () => {
    game();
    console.log('jestem')
    drawSquare()
    timerStart(timeHolder);
})