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
        return 1;
    } else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return 2;
        } else {
            return 0;
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            return 2;
        } else {
            return 0;
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return 2;
        } else {
            return 0;
        }
    }
}

function game(event) {
    const playerSelection = event.target.parentElement.id;
    const computerSelection = getComputerChoice();

    const scoreArray = [
        [0, "WIN", `Player ${playerSelection} beat Computer ${computerSelection}.`],
        [1, "TIE", `Player and Computer choose ${playerSelection}.`],
        [2, "LOSE", `Player ${playerSelection} lose against Computer ${computerSelection}.`]
    ];

    // Play a round of rps game
    const roundResult = scoreArray[playRound(playerSelection, computerSelection)];
    // Update the score
    scoreNumber[roundResult[0]] += 1;
    // Update DOM score
    scoreText[roundResult[0]].textContent = scoreNumber[roundResult[0]];
    // Update round result WIN / TIE / LOSE in DOM
    result[0].textContent = roundResult[1];
    const textColor = roundResult[0] === 0 ? "skyblue" : (roundResult[0] === 2 ? "salmon" : "gray");
    result[0].style.color = textColor;
    result[0].style.fontSize = "40px";
    // Update result information
    result[1].textContent = roundResult[2];
    // Reset the image
    playerPick.textContent = "";
    computerPick.textContent = "";
    // Append new image
    const playerImage = changeImage(playerSelection);
    playerPick.appendChild(playerImage);
    const computerImage = changeImage(computerSelection);
    computerPick.appendChild(computerImage);

    // Checking if Game ended
    if (checkScore()) {
        // make pop-up Modal-Box
        const textBox = document.querySelector(".modal-content h1");
        textBox.textContent = roundResult[1];
        textBox.style.color = textColor;
        const restart = document.querySelector(".modal-content button");
        restart.addEventListener("click", restartGame); // Restart button
        modalBox.style.display = "block";
    }

    // console.log(roundResult[1], roundResult[2]);
}

function changeImage(choice) {
    // create new image element
    const image = document.createElement("img");
    image.setAttribute("src", `./image/${choice}.png`);
    image.setAttribute("class", "hand-image");
    image.setAttribute("alt", `${choice}`);
    return image;
}

function checkScore() {
    if (scoreNumber[0] === 5 || scoreNumber[2] === 5) return true;
    return false;
}

function restartGame() {
    scoreNumber = [0, 0, 0];
    playerPick.textContent = "?";
    computerPick.textContent = "?";
    result.forEach((node) => node.textContent = "");
    scoreText.forEach((node) => node.textContent = 0);
    modalBox.style.display = "none";
}

let scoreNumber = [0, 0, 0];  // WIN, TIE, LOSE
const scoreText = document.querySelectorAll(".score span");
const choice = document.querySelectorAll(".container button");
const result = document.querySelectorAll(".result");
const playerPick = document.querySelector(".player");
const computerPick = document.querySelector(".computer");
const modalBox = document.querySelector(".modal");
for (let i = 0; i < choice.length; i++) {
    choice[i].addEventListener("click", (e) => {
        game(e)
    });
};

