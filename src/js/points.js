let pointsHolder = document.querySelector('.header__points-count');
let lifeHolder = document.querySelector('.header__life-count');
let points = 0;
let life = 3;
let endGame = false;


function addPoints() {
    points++
    pointsHolder.textContent = `${points}`
}

function removeLife() {
    life--
    lifeHolder.textContent = `${life}`
    if (life === 0) {
        alert('Gra skończona!')
        endGame = !endGame
        points = 0;
        life = 3;
        pointsHolder.textContent = `${points}`
        lifeHolder.textContent = `${life}`
    }
}



export {
    addPoints,
    removeLife,
    endGame
}