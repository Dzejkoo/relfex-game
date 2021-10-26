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

const timeHolder = document.querySelector('.header__timer-counting');
const buttonStart = document.querySelector('.navigation__start');
let numberOfSqures = 25;
createSquares(numberOfSqures);
const squares = [...document.querySelectorAll('.game-place__square')];



buttonStart.addEventListener('click', () => {
    squares.forEach((el) => el.addEventListener('click', (e) => {

        let ifIncludes = e.target.className.includes('game-place__square--active');

        if (ifIncludes) {
            clearInterval(timeToRemove)
            el.classList.remove('game-place__square--active');
            drawSquare();
        } else {
            clearInterval(timeToRemove)
            squares.forEach(el => el.classList.remove('game-place__square--active'))
            console.log('zabieram życie')
            drawSquare();
        }
    }));
    drawSquare()
    timerStart(timeHolder);
})