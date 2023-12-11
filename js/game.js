function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let buttonClicked = e.target.id;
    playRound((userChoice = buttonClicked));
  });
});

function checkWinner(computerChoice, userChoice) {
  if (computerChoice === userChoice) {
    return "It's a tie.";
  } else if (userChoice === "rock") {
    if (computerChoice === "scissors") {
      return "You win.";
    } else {
      return "You lose.";
    }
  } else if (userChoice === "paper") {
    if (computerChoice === "rock") {
      return "You win.";
    } else {
      return "You lose.";
    }
  } else if (userChoice === "scissors") {
    if (computerChoice === "paper") {
      return "You win.";
    } else {
      return "You lose.";
    }
  }
}

function playRound() {
  let computerChoice = getComputerChoice();
  console.log(`Computer: ${computerChoice}\nUser: ${userChoice}`);
  return checkWinner(computerChoice, userChoice);
}

function game() {
  let userScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let roundResult = playRound();
    console.log(roundResult);
    if (roundResult === "You win.") {
      userScore += 1;
    }
    if (roundResult === "You lose.") {
      computerScore += 1;
    }
    console.log(
      `Current score: User: ${userScore}, Computer: ${computerScore}`
    );
  }
  console.log(`Final score: User: ${userScore}, Computer: ${computerScore}`);
}

game();
