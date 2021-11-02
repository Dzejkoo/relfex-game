import {
    timerStop
} from './timer';
import {
    timeToRemove
} from './draws';

let pointsHolder = document.querySelector('.header__points-count');
let lifeHolder = document.querySelector('.header__life-count');
let points = 0;
let life = 3;

function addPoints() {
    points++
    pointsHolder.textContent = `${points}`
}

function removeLife(squares) {
    life--
    lifeHolder.textContent = `${life}`
    if (life === 0) {
        alert('Gra skończona!')
        reset(squares)
    }
}

function reset(squares) {
    points = 0;
    life = 3;
    pointsHolder.textContent = `${points}`
    lifeHolder.textContent = `${life}`
    timerStop();
    clearInterval(timeToRemove);
    squares.forEach(el => el.classList.remove('game-place__square--active'))
}
export {
    addPoints,
    removeLife,
    reset
}