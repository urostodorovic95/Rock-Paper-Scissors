let userScore = 0;
let computerScore = 0;

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
    document.querySelector(".results").classList.add("bordersVisible");
    document
      .querySelector(".score")
      .classList.add("bordersVisible", "backgroundShow");
  });
});

function checkWinner(computerChoice, userChoice) {
  if (computerChoice === userChoice) {
    return "It's a tie.";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    return "You win.";
  } else {
    return "You lose.";
  }
}

function playRound() {
  if (userScore < 5 && computerScore < 5) {
    let computerChoice = getComputerChoice();
    let userChoice = arguments[0];
    let result = checkWinner(computerChoice, userChoice);

    displayResult(userChoice, computerChoice, result);
    updateScore(result);
    displayScore(userScore, computerScore, result);
    if (userScore === 5 || computerScore === 5) {
      announceWinner();
      userScore = 0;
      computerScore = 0;
    }
  }
}

function displayResult(userChoice, computerChoice, roundResult) {
  let resultsContainer = document.querySelector(".results");
  removeChildren(resultsContainer);
  let displayUserChoice = document.createElement("div");
  displayUserChoice.textContent = `You chose ${userChoice}.`;

  let displayComputerChoice = document.createElement("div");
  displayComputerChoice.textContent = `Computer chose ${computerChoice}.`;

  let displayResult = document.createElement("div");
  displayResult.textContent = roundResult;

  resultsContainer.append(
    displayUserChoice,
    displayComputerChoice,
    displayResult
  );
}

function updateScore(roundResult) {
  if (roundResult === "You win.") {
    userScore += 1;
  }
  if (roundResult === "You lose.") {
    computerScore += 1;
  }
}

function displayScore(userScore, computerScore) {
  let scoreContainer = document.querySelector(".score");
  removeChildren(scoreContainer);
  document.body.appendChild(scoreContainer);
  scoreContainer.className = "score";

  let displayUserScore = document.createElement("div");
  displayUserScore.textContent = `Your score: ${userScore}`;

  let displayComputerScore = document.createElement("div");
  displayComputerScore.textContent = `Computer score: ${computerScore}`;

  scoreContainer.append(displayUserScore, displayComputerScore);
}

function announceWinner() {
  if (userScore > computerScore) {
    alert("You win!");
  } else if (userScore === computerScore) {
    alert("Oh my, 'tis a tie!");
  } else {
    alert("You lose!");
  }
}

function removeChildren(targetNode) {
  Array.from(targetNode.childNodes).forEach((node) => node.remove());
}
