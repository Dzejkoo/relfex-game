let timeToRemove;

function drawSquare() {
    const squares = [...document.querySelectorAll('.game-place__square')];
    let numberOfSquare = randomNumber(1, squares.length - 1);
    squares[numberOfSquare].classList.add('game-place__square--active');
    removeSquare(squares, numberOfSquare);
}

function removeSquare(squares, numberOfSquare) {
    timeToRemove = setTimeout(() => {
        squares[numberOfSquare].classList.remove('game-place__square--active');
        // alert('Zbyt wolno, tracisz życie!')
        drawSquare()
    }, 3000)
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


export {
    drawSquare,
    timeToRemove
}