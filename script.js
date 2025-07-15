const choices = ["rock","paper","scissors"]
const playerText = document.getElementById("playerDisplay");
const computerText = document.getElementById("computerDisplay");
const resultText = document.getElementById("resultDisplay");
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");
let winCount = 0;
let lostCount = 0;

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random()*3)]
    playerText.textContent = "PLAYER: "+playerChoice.toUpperCase();
    computerText.textContent = "COMPUTER: "+computerChoice.toUpperCase();
    let humanWin = [["paper", "rock"], ["scissors", "paper"], ["rock", "scissors"]];
    let isWin = false;
    if(playerChoice === computerChoice) {
        resultText.textContent = "It's a draw";
        resultText.classList.add("whiteDraw");
        return;
    }else{
        for(let pair of humanWin){
            if(pair[0] === playerChoice && pair[1] === computerChoice) {
                isWin = true;
                break;
            }
        }
    }
    resultText.classList.remove("greenWon","redLost","whiteDraw")
    if(isWin){
        resultText.textContent = "You Won!!";
        resultText.classList.add("greenWon");
        winCount++;
        playerScore.textContent = winCount;
    }
    else{
        resultText.textContent = "You Lost!!";
        resultText.classList.add("redLost");
        lostCount++;
        computerScore.textContent = lostCount;
    }
}

function reset(){
    resultText.textContent = "";
    playerScore.textContent = 0;
    computerScore.textContent = 0;
}