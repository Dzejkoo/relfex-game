function drawSquare() {
    const squares = [...document.querySelectorAll('.game-place__square')];
    let numberOfSqure = randomNumber(0, squares.length);
    squares[numberOfSqure].classList.add('game-place__square--active');

}


function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export {
    drawSquare
}