function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    return (
        choices[Math.floor(Math.random() * choices.length)]
    )
}

// for debugging
console.log(getComputerChoice())