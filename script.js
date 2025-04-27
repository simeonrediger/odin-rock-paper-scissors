const roundTracker = document.querySelector('#round-tracker');
const scoreboard = document.querySelector('#scoreboard');
const choiceButtons = document.querySelector('#choices');
const announcements = document.querySelector('#announcements');

const choices = ['rock', 'paper', 'scissors'];
let gameIsConcluded = false;
let round = 0;
let humanScore = 0;
let computerScore = 0;
const scoreToWin = 5;

choiceButtons.addEventListener('click', playRound);

function playRound(event) {
    if (!event.target.value) {
        return;
    }

    if (gameIsConcluded) {
        resetGame();
    }

    round++;
    updateRoundTracker();
    const humanChoice = event.target.value;
    const computerChoice = getComputerChoice();
    const winner = determineWinner(humanChoice, computerChoice);
    updateResults(humanChoice, computerChoice, winner);
}

function resetGame() {
    round = 0;
    humanScore = 0;
    computerScore = 0;
    gameIsConcluded = false;
    updateRoundTracker();
}

function updateRoundTracker() {
    roundTracker.textContent = `Round ${round}`;
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

function updateResults(humanChoice, computerChoice, winner) {
    announcements.innerHTML = '';
    const choicesPara = document.createElement('p');
    const outcomePara = document.createElement('p');
    choicesPara.textContent = `
        You chose ${humanChoice}. Computer chose ${computerChoice}.
    `.trim();

    switch (winner) {
        case 'human':
            outcomePara.textContent = 'You won this round!';
            humanScore++;
            break;

        case 'computer':
            outcomePara.textContent = 'You lost this round.';
            computerScore++;
            break;

        default:
            outcomePara.textContent = 'You tied this round.';
    }

    announcements.append(choicesPara, outcomePara);
    scoreboard.textContent = `${humanScore} \u2013 ${computerScore}`;
    checkAndHandleWin();
}

function checkAndHandleWin() {
    if (![humanScore, computerScore].includes(scoreToWin)) {
        return;
    }

    const winnerPara = document.createElement('p');

    if (humanScore === 5) {
        winnerPara.classList.add('won');
        winnerPara.textContent = 'You won the game!';
    } else {
        winnerPara.classList.add('lost');
        winnerPara.textContent = 'You lost the game!';
    }

    announcements.lastChild.remove();
    announcements.append(winnerPara);
    gameIsConcluded = true;
}
