
// variables
const board = document.querySelector('.board');
const cells = board.querySelectorAll('.cell');
const turnDisplay = document.querySelector('.turn');
const controls = document.querySelector('.control');
let currentPlayer = 'X';
let gameOver = false;

// events
cells.forEach(function attachCellListener(cell){
    console.log(cell)
    cell.addEventListener('click',  onCellClick); 
});
// functions
function onCellClick(event) {
    const elemtn =event.target;
    elemtn.textContent = currentPlayer;
    currentPlayer = currentPlayer === 'X' ? 'O': 'X';
}
// kick it off