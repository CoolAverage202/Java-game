function getComputerChoice(){
    const compChoices = ["rock", "paper", "scissors"]; // let computer pick [rock, paper, scissors]
    let randomizeChoice = Math.floor(Math.random() * compChoices.length) + 1 //randomize rock paper scissors

    if (randomizeChoice === 1) {
        return "rock";
    } if (randomizeChoice === 2) {
    return "paper";
    } else if (randomizeChoice === 3) {
    return "scissors";
    }
}

function getHumanChoice() {
    // Define an array with valid choices
    const validChoices = ["rock", "paper", "scissors"];
    
    // Prompt the user for their choice
    let userChoice = window.prompt("Please enter your choice (rock, paper, or scissors):");
    
    // Check if the user entered something
    if (userChoice) {
        // Convert the user choice to lowercase to ensure case-insensitivity
        userChoice = userChoice.toLowerCase();
        
        // Check if the user choice is in the list of valid choices
        if (validChoices.includes(userChoice)) {
            // Return the valid user choice
            return userChoice;
        } else {
            // If the choice is invalid, inform the user and prompt again
            console.log("Invalid choice. Please enter rock, paper, or scissors.");
            return getHumanChoice(); // Recursive call to prompt again
        }
    } else {
        // If no input was provided, inform the user and prompt again
        console.log("No input provided. Please enter rock, paper, or scissors.");
        return getHumanChoice(); // Recursive call to prompt again
    }
}


