const board = document.querySelector('#board');
const colors = ['red', 'blue', 'green', 'yellow', 'purple',
    '#e4460f', '#1ea2ca', '#da5381', '#499332', '#929632', '#230e32',
'#ac0e32','#b66682']
const SQUARES_NUMBER = 500;

for (let i = 0; i < SQUARES_NUMBER; i++){
    let square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseleave', () => removeColor(square))
    board.append(square);
}

function setColor(square) {
    const color = getColor()
    square.style.backgroundColor = color
    square.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(square) {
    square.style.backgroundColor = "1d1d1d";
    square.style.boxShadow = `0 0 2px #000`
}

function getColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}