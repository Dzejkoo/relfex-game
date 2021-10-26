import './sass/main.scss';
import {
    timerStart
} from './js/timer';

const timeHolder = document.querySelector('.header__timer-counting')

timerStart(timeHolder);