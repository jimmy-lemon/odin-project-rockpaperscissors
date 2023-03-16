/* Rock Paper Scissors project
Problem: Need to create a game of Rock Paper Scissors in the console 
Plan: - No UI
      - Input will be entered by the programmer 
      - Output will present one of three choices (rock, paper or scissors) randomly 
      - Output is randomized regardless of the input 
*/

/* function shuffleArray(array) {
    let currentId = array.length
    while (0 !== currentId) {
        let randomId = Math.floor(Math.random() * currentId);
        currentId -= 1;
        let tmp = array[currentId];
        array[currentId] = array[randomId];
        array[randomId] = tmp;
    }
    return array;
}


*/

const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice 
}

function playRound(playerSelection, computerSelection) {
    if (computerSelection == playerSelection) {
        return "Tie game, try again."
    } else if (
        (computerSelection == "paper" && playerSelection == "rock") || 
        (computerSelection == "rock" && playerSelection == "scissors") ||
        (computerSelection == "scissors" && playerSelection == "paper")) {
        return "You lose."
    } else {
        return "You win."
    }
}

function getPlayerChoice() {
    let validatedInput = false;
    while(validatedInput == false) {
        const choice = prompt("Rock Paper Scissors");
        if(choice == null){
            continue;
        }
        const choiceLower = choice.toLowerCase();
        if (options.includes(choiceLower)){
            validatedInput = true
            return choiceLower;
        }
    }
}

function game() {
    let scorePlayer = 0;
    let scoreComputer = 0;
    console.log("Welcome!")
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log("I choose " + playerSelection + ", Computer chooses " + computerSelection)
        console.log(playRound(playerSelection, computerSelection));
        console.log("----------")
        if (playRound(playerSelection, computerSelection) == "You win.") {
            scorePlayer++;
        } else if (playRound(playerSelection, computerSelection) == "You lose.") {
            scoreComputer++;
        }
    }
    console.log("Game Over")
    if (scorePlayer > scoreComputer) {
        console.log("Player is the winner!");
    } else if (scorePlayer < scoreComputer) {
        console.log("Computer is the winner!");
    } else 
        console.log("Tied game.");
}

game()