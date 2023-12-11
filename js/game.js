function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

// add event listener to buttons, onclick call playRound
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
  let result = checkWinner(computerChoice, userChoice);
  console.log(result);
  displayResult(userChoice=userChoice, computerChoice=computerChoice, roundResult=result);
  return checkWinner(computerChoice, userChoice);
}

function displayResult(userChoice, computerChoice, roundResult) {
  let resultsContainer = document.querySelector(".results");
  resultsContainer.childNodes.forEach(node => node.remove());  // remove old choices 
  
  let DisplayUserChoice = document.createElement("div");
  DisplayUserChoice.textContent = userChoice;

  resultsContainer.appendChild(DisplayUserChoice);
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
