let humanScore;
let computerScore;
playGame();

function playGame() {
    console.log('The game has started!');
    humanScore = 0;
    computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    if (humanScore > computerScore) {
        console.log('You won the game!');
    } else if (computerScore > humanScore) {
        console.log('You lost the game!');
    } else {
        console.log('The game ended in a tie!');
    }

    if (confirm('Play again?')) {
        console.clear();
        playGame();
    }
}

function playRound(humanChoice, computerChoice) {
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
