
// variables
const board = document.querySelector('.board');
const cells = board.querySelectorAll('.cell');
const turnDisplay = document.querySelector('.turn span');
const controls = document.querySelector('.controls');
let resetBtn = controls.querySelector('button');
let currentPlayer = 'X';
let gameOver = false;

// events
cells.forEach(function attachCellListener(cell){
   
    cell.addEventListener('click',  onCellClick); 
});
resetBtn.addEventListener('click', reset);
// functions
function onCellClick(event) {
    const element = event.target;
    if(element.beenClicked){
        return;
    }
    element.beenClicked = true;
    element.textContent = currentPlayer;
    currentPlayer = currentPlayer === 'X' ? 'O': 'X';
    renderTurn();
}

function reset(event) {
    currentPlayer = 'X';
    cells.forEach(function resetCell(cell){
        delete cell.beenClicked;
        cell.textContent = '';
    })
    renderTurn();
}

function renderTurn() {
    turnDisplay.textContent = currentPlayer;
}
// kick it off
renderTurn();