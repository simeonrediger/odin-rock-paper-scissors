// CREATE score trackers

// Play a round
    // GET human choice
    // GET computer choice
    // INCREMENT winner's score
        // IF choices are the same
            // End the round
        // ELSE IF human chose rock
            // IF computer chose paper
                // INCREMENT computer's score
            // ELSE
                // INCREMENT human's score
        // ELSE IF human chose paper
            // IF computer chose rock
                // INCREMENT human's score
            // ELSE
                // INCREMENT computer's score
        // ELSE IF human chose scissors
            // IF computer chose rock
                // INCREMENT computer's score
            // ELSE
                // INCREMENT human's score

function getComputerChoice() {
    const arbitraryIndex = Math.floor(Math.random() * 3);

    switch (arbitraryIndex) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function getHumanChoice() {
    let userInput = prompt('Rock, Paper, Scissors, shoot!');
    return userInput.toLowerCase();
}
