function createPoint() {
    const pointBlock = document.createElement('div');
    pointBlock.classList.add('game__point');
    pointBlock.textContent = '0';

    return pointBlock;
}

export default createPoint;