const roundTracker = document.querySelector('#round-tracker .monospace');
const scoreboard = document.querySelector('#scoreboard');
const choiceButtons = document.querySelector('#choices');
const announcements = document.querySelector('#announcements');
const choices = ['rock', 'paper', 'scissors'];
let humanScore;
let computerScore;

choiceButtons.addEventListener('click', playRound);

function playRound(event) {
    if (!event.target.value) {
        return;
    }

    const humanChoice = event.target.value;
    const computerChoice = getComputerChoice();
    const winner = determineWinner(humanChoice, computerChoice);
    showResults(humanChoice, computerChoice, winner);
}

function getComputerChoice() {
    const randomChoiceIndex = Math.floor(Math.random() * 3);
    return choices[randomChoiceIndex];
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

function showResults(humanChoice, computerChoice, winner) {
    clearResults();

    const choicesPara = document.createElement('p');
    const outcomePara = document.createElement('p');

    choicesPara.textContent = `
        You chose ${humanChoice}. Computer chose ${computerChoice}.
    `.trim();

    if (winner === 'human') {
        outcomePara.textContent = 'You won this round!';
        humanScore++;
    } else if (winner === 'computer') {
        outcomePara.textContent = 'You lost this round.';
        computerScore++;
    } else {
        outcomePara.textContent = 'You tied this round.';
    }

    announcements.append(choicesPara, outcomePara);
}

function clearResults() {
    announcements.innerHTML = '';
}
