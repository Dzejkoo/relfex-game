let pointsHolder = document.querySelector('.header__points-count');
let points = 0;

function addPoints() {
    points++
    pointsHolder.textContent = `${points}`
}
export {
    addPoints
}