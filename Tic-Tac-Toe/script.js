
let board = ["","","","","","","","",""];
let currentPlayer = "X";
let gameActive = true;

const winPatterns = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];

function makeMove(index){
    if(board[index] !== "" || !gameActive) return;

    board[index] = currentPlayer;
    document.getElementsByClassName("cell")[index].textContent = currentPlayer;

    if(checkWinner()){
        highlightWin();
        document.getElementById("status").textContent = currentPlayer + " Wins! 🎉";
        gameActive = false;
        return;
    }

    if(board.every(cell => cell !== "")){
        document.getElementById("status").textContent = "It's a Draw!";
        gameActive = false;
        return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
    document.getElementById("status").textContent = "Player " + currentPlayer + "'s Turn";
}

function checkWinner(){
    return winPatterns.some(pattern => {
        return pattern.every(index => board[index] === currentPlayer);
    });
}

function highlightWin(){
    winPatterns.forEach(pattern=>{
        if(pattern.every(i=>board[i]===currentPlayer)){
            pattern.forEach(i=>{
                document.getElementsByClassName("cell")[i].classList.add("win");
            });
        }
    });
}

function resetGame(){
    board = ["","","","","","","","",""];
    currentPlayer = "X";
    gameActive = true;

    document.getElementById("status").textContent = "Player X's Turn";

    let cells = document.getElementsByClassName("cell");
    for(let cell of cells){
        cell.textContent = "";
        cell.classList.remove("win");
    }
}


