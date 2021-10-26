import './sass/main.scss';
import {
    timerStart
} from './js/timer';
import {
    drawSquare
} from './js/draw';
import {
    createSquares
} from './js/createSquare';
import {
    resultClick
} from './js/checkElement';

const timeHolder = document.querySelector('.header__timer-counting');
const buttonStart = document.querySelector('.navigation__start');
let numberOfSqures = 25;

createSquares(numberOfSqures);
const squares = [...document.querySelectorAll('.game-place__square')];

buttonStart.addEventListener('click', () => {
    squares.forEach(el => el.addEventListener('click', (e) => resultClick(e)))
    timerStart(timeHolder);
    drawSquare()
})