let pointsHolder = document.querySelector('.header__points-count');
let lifeHolder = document.querySelector('.header__life-count');
let points = 0;
let life = 3;

function addPoints() {
    points++
    pointsHolder.textContent = `${points}`
}

function removeLife() {
    life--
    lifeHolder.textContent = `${life}`
    if (life === 0) {
        alert('Gra skończona!')
    }
}
export {
    addPoints,
    removeLife
}