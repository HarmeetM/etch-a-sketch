const container = document.getElementById('gameContainer');
const blackBtn = document.getElementById('Black');
const rainbowBtn = document.getElementById('Rainbow');
const eraserBtn = document.getElementById('Eraser');
const clearBtn = document.getElementById('Clear');
const newSize = document.getElementById('newBoard');
/*const slideySlider = document.getElementById('myRange');
const sliderValue = document.getElementById('Cells');
const gridItems = document.getElementById('grid-item');
*/

let gridSize = prompt("Enter the starting size of your etch-a-sketch");

function makeRows(rows, cols) {
    for (i = 0;i < (rows * cols); i++) {
        let cell = document.createElement('div');
        container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        cell.innerText = '';
        container.appendChild(cell).className = 'gridItem';
    }
}

makeRows(gridSize, gridSize);

blackBtn.onclick = () => blackDraw();
rainbowBtn.onclick = () => rainbowDraw();
eraserBtn.onclick = () => eraserDraw();
clearBtn.onclick = () => clearBoard();
//newSize.onclick = () => updateSize();
/*
slideySlider.onchange = (e) => changeSize();
sliderValue.onchange = (e) => updateSize();
*/


//add a class to change background to black on mouseover
function blackDraw() {
    const divs = container.querySelectorAll('.gridItem');
    divs.forEach(gridItem => gridItem.addEventListener('mouseover', () => {
        gridItem.style.background = '#000000';
    }));
}
//add a class to change background to rainbow on mouseover
function rainbowDraw() {
    const divs = container.querySelectorAll('.gridItem');
    divs.forEach(gridItem => gridItem.addEventListener('mouseover', () => {
        const R = Math.floor(Math.random() * 256);
        const G = Math.floor(Math.random() * 256);
        const B = Math.floor(Math.random() * 256);
        gridItem.style.background = `rgb(${R}, ${G}, ${B})`;
    }))
}
//add a class to change background to eraser on mouseover
function eraserDraw() {
    const divs = container.querySelectorAll('.gridItem');
    divs.forEach(gridItem => gridItem.addEventListener('mouseover', () => {
        gridItem.style.background = '#FFFFFF';
    }));
}
//add a clear button that lets us set up a blank grid
function clearBoard() {
    const divs = container.querySelectorAll('.gridItem');
    divs.forEach(gridItem => gridItem.remove())
    let boardSize = prompt("Enter a new size for your etch-a-sketch");
    makeRows(boardSize, boardSize);
}
//change board size with prompt
/*function updateSize () {
    let boardSize = prompt("Enter a new size for your etch-a-sketch");
    makeRows(boardSize, boardSize);
}
*/

/*
//slider functionality for grid size and updating size on screen
function updateSize(value) {
    sliderValue.innerHTML = `${value} x ${value}`;
}

function changeSize(value) {
    updateSize(value)
    makeRows(value, value)
    //clearBoard()
}
*/
