function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    return (
        choices[Math.floor(Math.random() * choices.length)]
    )
}


let playerSelection = function() {
    return prompt("Choose your weapon(rock, paper, scissors: ").toLowerCase().trim()
};


function checkWinner(computerChoice, userChoice) {
    if (computerChoice === userChoice) {
        return "It's a tie."
    } else if (userChoice === "rock") {
        if (computerChoice === "scissors") {
            return "You win."
        } else {
            return "You lose."
        }
    } else if (userChoice === "paper") {
        if (computerChoice === "rock") {
            return "You win."
        } else {
            return "You lose."
        }
    } else if (userChoice === "scissors") {
        if (computerChoice === "paper") {
            return "You win."
        } else {
            return "You lose."
        }
    }
}

function playRound(computerChoice=getComputerChoice(), userChoice=playerSelection()) {
    // debug:
    console.log(`Computer: ${computerChoice}\nUser: ${userChoice}`)
    let msgWinner = checkWinner(computerChoice, userChoice);
    console.log(msgWinner)
    if (msgWinner === "It's a tie.") {
        playRound()
    }
}


playRound()
