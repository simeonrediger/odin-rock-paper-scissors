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
    } else {
        console.log('Refresh the page to play again.');
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
    if (humanChoice === computerChoice) {
        return 'none';
    }

    switch (`${humanChoice} ${computerChoice}`) {
        case 'rock scissors':
        case 'paper rock':
        case 'scissors paper':
            return 'human';

        case 'rock paper':
        case 'paper scissors':
        case 'scissors rock':
            return 'computer';
    }
}
