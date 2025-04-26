let humanScore = 0;
let computerScore = 0;

playRound();

function playRound() {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

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
    let humanChoice = prompt('Rock, Paper, Scissors, shoot!').toLowerCase();
    console.log(`You chose ${humanChoice}.`);
    return humanChoice;
}

function getComputerChoice() {
    const randomChoiceIndex = Math.floor(Math.random() * 3);
    let computerChoice;

    switch (randomChoiceIndex) {
        case 0:
            computerChoice = 'rock';
            break;
        case 1:
            computerChoice = 'paper';
            break;
        case 2:
            computerChoice = 'scissors';
            break;
    }

    console.log(`Computer chose ${computerChoice}.`)
    return computerChoice;
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
