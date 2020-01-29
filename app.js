let choices = ["rock", "paper", "scissors"];

function rock() {
  let computerPick = choices[Math.floor(Math.random() * choices.length)];
  console.log("This is computer choice within function", computerPick)
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
  let computerPick = choices[Math.floor(Math.random() * choices.length)];
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
  let computerPick = choices[Math.floor(Math.random() * choices.length)];
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