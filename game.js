function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
    // console.log(choice)
    switch (choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `Tie. Player and Computer choose ${playerSelection}.`;
    }else if (playerSelection === "rock"){
        if (computerSelection === "paper") {
            return `Lose. Player ${playerSelection} lose against Computer ${computerSelection}.`;
        }else {
            return `Win. Player ${playerSelection} beat Computer ${computerSelection}.`;
        }
    }else if (playerSelection === "paper"){
        if (computerSelection === "scissors") {
            return `Lose. Player ${playerSelection} lose against Computer ${computerSelection}.`;
        }else {
            return `Win. Player ${playerSelection} beat Computer ${computerSelection}.`;
        }
    }else if (playerSelection === "scissors"){
        if (computerSelection === "rock") {
            return `Lose. Player ${playerSelection} lose against Computer ${computerSelection}.`;
        }else {
            return `Win. Player ${playerSelection} beat Computer ${computerSelection}.`;
        }
    }
}


// const playerSelection = "scissors";
// const computerSelection = getComputerChoice();
// console.log(playerSelection)
// console.log(computerSelection)
// console.log(playRound(playerSelection, computerSelection));

function getPlayerChoice() {
    const choiceList = ["rock", "paper", "scissors"];
    let choice = prompt("Your choice? [\"rock\", \"paper\", \"scissors\"]");
    while (choiceList.indexOf(choice) === -1) {
        choice = prompt("Must be rock or paper or scissors")
    }
    return choice
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
     }   
}

