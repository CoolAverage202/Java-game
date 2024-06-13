// Global scope score variables
let humanScore = 0;
let computerScore = 0;

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
        return "It's a tie!";
    } else if (winningCondition[humanChoice] === computerChoice) {
        return `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
        return `You lose! ${computerChoice} beats ${humanChoice}`;
    }
}
console.log(playRound("rock", "scissors"));

// Function to play the entire game
function playGame() {
    const rounds = 5;

    for (let i = 0; i < rounds; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        const result = playRound(humanChoice, computerChoice);

        console.log(result);

        if (result.includes("win")) {
            humanScore++;
        } else if (result.includes("lose")) {
            computerScore++;
        }

        console.log(`Round ${i + 1}:`);
        console.log(`Human Score: ${humanScore}`);
        console.log(`Computer Score: ${computerScore}`);
    }

    // Determine the final winner
    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else if (humanScore < computerScore) {
        console.log("Sorry, you lost the game. Better luck next time!");
    } else {
        console.log("The game is a tie!");
    }
}

// Start the game
playGame();

