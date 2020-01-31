let choices = ["rock", "paper", "scissors"];



function play(num) {
  let computerPick = choices[Math.floor(Math.random() * choices.length)];
  let playerPick = choices[num];
  let imageElement = document.getElementById("pic");
  document.getElementById("playerText").innerText = `${playerPick}`;
  document.getElementById("computerText").innerText = `${computerPick}`;
  console.log("Comp choice", computerPick);
  console.log("Player choice", playerPick);

  if (playerPick < computerPick) {
    document.getElementById("picText").innerHTML = "You win";
    imageElement.src = "https://images.unsplash.com/photo-1578269174936-2709b6aeb913?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80";
  } else if (playerPick > computerPick) {
    document.getElementById("picText").innerHTML = "You lose";
    imageElement.src = "https://images.unsplash.com/photo-1534653169071-4f036d137aca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1948&q=80";
  } else if (playerPick == computerPick) {
    document.getElementById("picText").innerHTML = "It is a draw";
    imageElement.src = "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80";
  };
}

/* ROCK IMAGE
https://images.unsplash.com/photo-1525857597365-5f6dbff2e36e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80
PAPER IMAGE
https://images.unsplash.com/photo-1560560011-ea70ae062668?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80
SCISSORS IMAGE
https://images.unsplash.com/photo-1503792501406-2c40da09e1e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80
*/

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