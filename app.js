let choices = ["rock", "paper", "scissors"];

function play(num) {
  let computerPick = choices[Math.floor(Math.random() * choices.length)];
  let playerPick = choices[num];
  console.log("Comp choice", computerPick);
  console.log("Player choice", playerPick);
  if (playerPick > computerPick) {
    document.getElementById("cardTopText").textContent = "You win";
  } else if (playerPick < computerPick) {
    document.getElementById("cardTopText").textContent = "You lose";
  } else if (playerPick == computerPick) {
    document.getElementById("cardTopText").textContent = "It is a draw";
  };
}

// 1st attempt with multiple functions
// function rock() {
//   let computerPick = choices[Math.floor(Math.random() * choices.length)];
//   console.log("This is computer choice within function", computerPick);
//   if (computerPick == choices[0]) {
//     document.getElementById("cardTopText").textContent = "It is a draw";
//     console.log(computerPick);
//   } else if (computerPick == choices[1]) {
//     document.getElementById("cardTopText").textContent = "You lose";
//     console.log(computerPick);
//   } else if (computerPick == choices[2]) {
//     document.getElementById("cardTopText").textContent = "You win";
//   }
// }
// function paper() {
//   let computerPick = choices[Math.floor(Math.random() * choices.length)];
//   if (computerPick == choices[1]) {
//     document.getElementById("cardTopText").textContent = "It is a draw";
//     console.log(computerPick);
//   } else if (computerPick == choices[2]) {
//     document.getElementById("cardTopText").textContent = "You lose";
//     console.log(computerPick);
//   } else if (computerPick == choices[0]) {
//     document.getElementById("cardTopText").textContent = "You win";
//   }
// }
// function scissors() {
//   let computerPick = choices[Math.floor(Math.random() * choices.length)];
//   if (computerPick == choices[2]) {
//     document.getElementById("cardTopText").textContent = "It is a draw";
//     console.log(computerPick);
//   } else if (computerPick == choices[0]) {
//     document.getElementById("cardTopText").textContent = "You lose";
//     console.log(computerPick);
//   } else if (computerPick == choices[1]) {
//     document.getElementById("cardTopText").textContent = "You win";
//   }
// }