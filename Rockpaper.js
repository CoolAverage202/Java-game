function getComputerChoice(){
    const compChoices = ["rock", "paper", "scissors"]; // let computer pick [rock, paper, scissors]
    let randomizeChoice = Math.floor(Math.random() * compChoices.length) + 1 //randomize rock paper scissors

    if (randomizeChoice === 1) {
        return "rock";
    } if (randomizeChoice === 2) {
    return "paper";
    } else (randomizeChoice === 3) {
    return "scissors";
    }
}

function getHumanChoice(){
    const validChoices = ["rock", "paper", "scissors"]; // valid choices for the user to select from

    let userChoice = prompt("Please enter your choice"); // user input

    userChoice = userChoice.toLowerCase(); // convert user input to lowercase

    if (validChoices.includes(userChoice)) {
        return userChoice;
    } else {
        console.log("Invalid choice. Please enter rock paper or scissors.")

        return getHumanChoice();
    }
}

console.log(getHumanChoice()); // testing the getHumanChoice
