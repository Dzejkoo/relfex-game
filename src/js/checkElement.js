function resultClick(event) {
    let ifIncludes = event.target.className.includes('game-place__square--active');
    console.log(ifIncludes)
    if (ifIncludes) {
        console.log('dodaje punkt')
    } else {
        console.log('zabieram życie')
    }

}

export {
    resultClick
}