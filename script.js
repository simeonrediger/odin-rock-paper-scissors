let humanScore = 0;
let computerScore = 0;

playRound();

function playRound() {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    console.log(`You chose ${humanChoice}. Computer choose ${computerChoice}.`);

    const winner = determineWinner(humanChoice, computerChoice);
    let outcomeMessage;

    if (winner === 'human') {
        outcomeMessage = 'You won this round!';
        humanScore++;
    } else if (winner === 'computer') {
        outcomeMessage = 'You lost this round.';
        computerScore++;
    } else {
        outcomeMessage = 'You tied this round.';
    }

    outcomeMessage += `\nYou: ${humanScore}\tComputer: ${computerScore}`;
    console.log(outcomeMessage);
}

function getHumanChoice() {
    return prompt('Rock, Paper, Scissors, shoot!').toLowerCase();
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

function determineWinner(humanChoice, computerChoice) {
    switch (humanChoice) {
        case 'rock':
            switch (computerChoice) {
                case 'rock':
                    return 'none';
                case 'paper':
                    return 'computer';
                case 'scissors':
                    return 'human';
            }
        case 'paper':
            switch (computerChoice) {
                case 'rock':
                    return 'human';
                case 'paper':
                    return 'none';
                case 'scissors':
                    return 'computer';
            }
        case 'scissors':
            switch (computerChoice) {
                case 'rock':
                    return 'computer';
                case 'paper':
                    return 'human';
                case 'scissors':
                    return 'none';
            }
    }
}
