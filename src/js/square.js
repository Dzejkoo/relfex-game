function createSquares(number) {
    let parentsOfSquares = document.querySelector('.game-place__squares');
    for (let i = 0; i < number; i++) {
        let span = document.createElement('span');
        span.classList.add('game-place__square')
        parentsOfSquares.appendChild(span)
    }

}

export {
    createSquares
}