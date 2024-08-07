// Global scope score variables
let humanScore = 0;
let computerScore = 0;

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const outcomeDiv = document.querySelector('.outcomes');
const playerScoreSpan = document.querySelector('.player-score');
const compScoreSpan = document.querySelector('.computer-score');


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
    console.log('1', humanScore, '2', computerScore)
    if (humanChoice === computerChoice) {
        const p = document.createElement("p");
        p.textContent = "It's a tie!";
        outcomeDiv.appendChild(p);
        return "tie";
    } else if (winningCondition[humanChoice] === computerChoice) {
        const p = document.createElement("p");
        p.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        outcomeDiv.appendChild(p);
        return "win";
    } else {
        const p = document.createElement("p");
        p.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
        outcomeDiv.appendChild(p);
        return "lose";
    }
}

// 
function getWinner(result) {
    if (result === "win") {
        humanScore++;
    } else if (result === "lose") {
        computerScore++;
    }
    console.log('1', humanScore, '2', computerScore)
    // Determine the final winner
    if (humanScore === 5) {
        const h2 = document.createElement("h2");
        h2.textContent = `Congratulations! You won the game! Final score: ${humanScore} to ${computerScore}`;
        outcomeDiv.appendChild(h2);
        resetGame();
    } else if (computerScore === 5) {
        const h2 = document.createElement("h2");
        h2.textContent = `Sorry, you lost the game. Final score: ${humanScore} to ${computerScore}. Better luck next time!`;
        outcomeDiv.appendChild(h2);
        resetGame();
    }
}
function resetGame() {
    humanScore = 0;
    computerScore = 0;
}

// updating scores 

const updateScores = (humanChoice, computerChoice) => {
    playerScoreSpan.textContent = `Player Score: ${humanScore}  `;
    compScoreSpan.textContent = `Computer Score: ${computerScore}  `;
}


rockButton.addEventListener("click", () => {
    const humanChoice = 'rock';
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);
    updateScores(humanChoice, computerChoice);
    getWinner(result);
});
paperButton.addEventListener("click", () => {
    const humanChoice = 'paper';
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);
    updateScores(humanChoice, computerChoice);
    getWinner(result);
});
scissorsButton.addEventListener("click", () => {
    const humanChoice = 'scissors';
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);
    updateScores(humanChoice, computerChoice);
    getWinner(result);
});

