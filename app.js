const getComputerChoice = () => {
    const rpsChoice = Math.floor((Math.random()*3));
    
    if (rpsChoice === 0){
        return "rock";
    }
    if (rpsChoice === 1){
        return "paper";
    }
    if (rpsChoice === 2){
        return "scissors";
    }
}

const getHumanChoice = () => {
    return prompt("Please choose:\nRock, Paper or Scissors?")
}

const rockBtn = document.querySelector("#rock-btn");
const paperBtn = document.querySelector("#paper-btn");
const scissorsBtn = document.querySelector("#scissors-btn");
const resultDiv = document.querySelector("#result");
const playerScoreDisplay = document.querySelector("#player-score");
const computerScoreDisplay = document.querySelector("#computer-score");

let humanScore = 0;
let computerScore = 0;

playerScoreDisplay.textContent += `${humanScore}`;
computerScoreDisplay.textContent += `${computerScore}`;

const playRound = (humanChoice, computerChoice) => {
    
    if(humanChoice === computerChoice){
        resultDiv.textContent = "You tie!";
    } else {
        switch(humanChoice){
            case "rock":{
                if(computerChoice === "paper"){
                    resultDiv.textContent = "You lose!";
                    computerScore++;
                } else if(computerChoice === "scissors") {
                    resultDiv.textContent = "You win!";
                    humanScore++;
                }
                break;
            }
            case "paper":{
                if(computerChoice === "scissors"){
                    resultDiv.textContent = "You lose!";
                    computerScore++;
                } else if(computerChoice === "rock") {
                    resultDiv.textContent = "You win!";
                    humanScore++;
                }
                break;
            }
            case "scissors":{
                if(computerChoice === "rock"){
                    resultDiv.textContent = "You lose!";
                    computerScore++;
                } else if(computerChoice === "paper") {
                    resultDiv.textContent = "You win!";
                    humanScore++;
                }
                break;
            }
            default:{
                resultDiv.textContent = "Invalid choice!";
            }
        }
        playerScoreDisplay.textContent = `You : ${humanScore}`
        computerScoreDisplay.textContent = `Computer : ${computerScore}`
        
    }

    resultDiv.innerHTML += "<br>You chose " + humanChoice + ", the Computer chose " + computerChoice + ".";

    if(humanScore == 5){
        resultDiv.innerHTML += "<br><br>Congratulations! You won!"
    }
    if(computerScore == 5){
        resultDiv.innerHTML += "<br><br>Computer wins the game! Try again next time."
    }
}

rockBtn.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
})
    
paperBtn.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
})

scissorsBtn.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
})