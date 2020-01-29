let choices = ["rock", "paper", "scissors"];

let computerPick = choices[Math.floor(Math.random() * choices.length)];
console.log("This is the computer choice index", computerPick);

function rock() {
  if (computerPick == choices[0]) {
    document.getElementById("cardTopText").textContent = "It is a draw"
    console.log(computerPick)
  } else if (computerPick == choices[1]) {
    document.getElementById("cardTopText").textContent = "You lose"
    console.log(computerPick)
  } else if (computerPick == choices[2]) {
    document.getElementById("cardTopText").textContent = "You win"
  }
}
function paper() {
  // computer()
  if (computerPick == choices[1]) {
    document.getElementById("cardTopText").textContent = "It is a draw"
    console.log(computerPick)
  } else if (computerPick == choices[2]) {
    document.getElementById("cardTopText").textContent = "You lose"
    console.log(computerPick)
  } else if (computerPick == choices[0]) {
    document.getElementById("cardTopText").textContent = "You win"
  }
}
function scissors() {
  // computer()
  if (computerPick == choices[2]) {
    document.getElementById("cardTopText").textContent = "It is a draw"
    console.log(computerPick)
  } else if (computerPick == choices[0]) {
    document.getElementById("cardTopText").textContent = "You lose"
    console.log(computerPick)
  } else if (computerPick == choices[1]) {
    document.getElementById("cardTopText").textContent = "You win"
  }
}