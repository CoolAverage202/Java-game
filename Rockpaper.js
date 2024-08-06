// Global scope score variables
let humanScore = 0;
let computerScore = 0;

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const outcomeDiv = document.querySelector('.outcomes');


// Function to get computer's choice
function getComputerChoice() {
    const compChoices = ["rock", "paper", "scissors"];
    let randomizeChoice = Math.floor(Math.random() * compChoices.length); 
    return compChoices[randomizeChoice];
}

// Function to get human's choice
function getHumanChoice() {
    const validChoices = ["rock", "paper", "scissors"];
    let userChoice = window.prompt("Please enter your choice (rock, paper, or scissors):");
    
    if (userChoice) {
        userChoice = userChoice.toLowerCase();
        if (validChoices.includes(userChoice)) {
            return userChoice;
        } else {
            console.log("Invalid choice. Please enter rock, paper, or scissors.");
            return getHumanChoice();
        }
    } else {
        console.log("No input provided. Please enter rock, paper, or scissors.");
        return getHumanChoice();
    }
}

// Function to play a single round
function playRound(humanChoice, computerChoice) {
    const winningCondition = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper"
    };
    
    humanChoice = humanChoice.toLowerCase();
    
    console.log('human choice -> ', humanChoice)
    console.log('computer choice ->', computerChoice)
    
    if (humanChoice === computerChoice) {
        const p = document.createElement("p");
        p.textContent = "It's a tie!";
        outcomeDiv.appendChild(p);
    } else if (winningCondition[humanChoice] === computerChoice) {
        const p = document.createElement("p");
        p.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        outcomeDiv.appendChild(p);
    } else {
        const p = document.createElement("p");
        p.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
        outcomeDiv.appendChild(p);
    }
}
console.log(playRound("rock", "scissors"));

// Function to play the entire game
function playGame() {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);
    
    console.log(result);
    
    if (result.includes("win")) {
        humanScore++;
    } else if (result.includes("lose")) {
        computerScore++;
    }
    
    console.log(`Human Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);
    
    // Determine the final winner
    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else if (humanScore < computerScore) {
        console.log("Sorry, you lost the game. Better luck next time!");
    } else {
        console.log("The game is a tie!");
    }
}

rockButton.addEventListener("click", () => {
    const humanChoice = 'rock';
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
});
paperButton.addEventListener("click", () => {
    const humanChoice = 'paper';
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
});
scissorsButton.addEventListener("click", () => {
    const humanChoice = 'scissors';
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
});


