const button = document.getElementById("button");
button.onclick = function () {
  //Grab user's values
  const p1 = document.getElementById("p1").value;
  const p2 = document.getElementById("p2").value;
  let result = "";

  //Check Winner
  if (p1 == "Rock" || p2 == "Paper") {
    result = "Player 2 wins";
  } else if (p1 == "Rock" || p2 == "Scissors") {
    result = "Player 1 wins";
  } else if (p1 == "Rock" || p2 == "Rock") {
    result = "It's tie";
  } else if (p1 == "Scissors" || p2 == "Rock") {
    result = "Player 2 wins";
  } else if (p1 == "Scissors" || p2 == "Scissors") {
    result = "It's a tie";
  } else if (p1 == "Scissors" || p2 == "Paper") {
    result = "Player 1 wins";
  } else if (p1 == "Paper" || p2 == "Paper") {
    result = "It's a tie";
  } else if (p1 == "Paper" || p2 == "Scissors") {
    result = "Player 2 wins";
  } else if (p1 == "Paper" || p2 == "Rock") {
    result = "Player 2 wins";
  }

  //Clear input values
  document.getElementById("p1").value = "";
  document.getElementById("p2").value = "";

  //Show user's final result
  document.getElementById("result").innerHTML += result;
};

//Clear results
const btnClear = document.getElementById("clear");
btnClear.onclick = function () {
  document.getElementById("result").innerHTML = "";
};
