function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    return (
        choices[Math.floor(Math.random() * choices.length)]
    )
}


let playerSelection = function() {
    return prompt("Choose your weapon(rock, paper, scissors: ").toLowerCase().trim()
};

function playRound(computerChoice=getComputerChoice(), userChoice=playerSelection()) {
    console.log(`Computer: ${computerChoice}\nUser: ${userChoice}`)
    if (computerChoice === userChoice) {
        console.log("It's a tie!")
        playRound()
    } else if (userChoice === "rock") {
        if (computerChoice === "scissors") {
            console.log("You win!")
        } else {
            console.log("You lose.")
        }
    } else if (userChoice === "paper") {
        if (computerChoice === "rock") {
            console.log("You win.")
        } else {
            console.log("You lose.")
        }
    } else if (userChoice === "scissors") {
        if (computerChoice === "paper") {
            console.log("You win.")
        } else {
            console.log("You lose.")
        }
    }
}


playRound()
