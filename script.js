let humanScore = 0;
let computerScore = 0;

function playRound() {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
        return;
    }

    const humanChoiceIndex = getChoiceIndex(humanChoice);
    const computerChoiceIndex = getChoiceIndex(computerChoice);

    if (humanChoiceIndex > computerChoiceIndex) {

        if (humanChoiceIndex === 1) {
            humanScore++;
        } else {
            computerScore++;
        }

    } else {

        if (computerChoiceIndex === 1) {
            computerScore++;
        } else {
            humanScore++;
        }
    }
}

function getHumanChoice() {
    let userInput = prompt('Rock, Paper, Scissors, shoot!');
    return userInput.toLowerCase();
}

function getComputerChoice() {
    const randomChoiceIndex = Math.floor(Math.random() * 3);

    switch (randomChoiceIndex) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function getChoiceIndex(choice) {

    switch (choice) {
        case 'rock':
            return 0;
        case 'paper':
            return 1;
        case 'scissors':
            return 2;
    }
}
