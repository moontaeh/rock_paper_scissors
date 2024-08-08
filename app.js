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

const playGame = () => {
    let humanScore = 0;
    let computerScore = 0;

    const playRound = (humanChoice, computerChoice) => {
        humanChoice = humanChoice.toLowerCase();
        
        if(humanChoice === computerChoice){
            console.log("You tie!");
        } else {
            switch(humanChoice){
                case "rock":{
                    if(computerChoice === "paper"){
                        console.log("You lose!");
                        computerScore++;
                    } else if(computerChoice === "scissors") {
                        console.log("You win!");
                        humanScore++;
                    }
                    break;
                }
                case "paper":{
                    if(computerChoice === "scissors"){
                        console.log("You lose!");
                        computerScore++;
                    } else if(computerChoice === "rock") {
                        console.log("You win!");
                        humanScore++;
                    }
                    break;
                }
                case "scissors":{
                    if(computerChoice === "rock"){
                        console.log("You lose!");
                        computerScore++;
                    } else if(computerChoice === "paper") {
                        console.log("You win!");
                        humanScore++;
                    }
                    break;
                }
                default:{
                    console.log("Invalid choice!");
                }
            }
        }

        console.log("You chose ", humanChoice, ", the Computer chose ", computerChoice);
        console.log("Your score: ", humanScore," | Computer score: ", computerScore)
    }

    for(let i = 0; i < 5; i++){
        playRound(getHumanChoice(), getComputerChoice());
    }

}

playGame();