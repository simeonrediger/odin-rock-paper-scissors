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

// GET human choice
    // PROMPT user for input
    // CONVERT it to lowercase
    // RETURN it
