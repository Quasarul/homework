//function myFunction() {
//  document.getElementById("demo").innerHTML = "Hello World";
//}

//Grab user's values
const p1o1 = document.getElementById("rock1").textContent;
//console.log(p1o1);
const p1o2 = document.getElementById("scissors1").textContent;
//console.log(p1o2);
const p1o3 = document.getElementById("paper1").textContent;
//console.log(p1o3);
const p2o1 = document.getElementById("rock2").textContent;
//console.log(p2o1);
const p2o2 = document.getElementById("scissors2").textContent;
//console.log(p2o2);
const p2o3 = document.getElementById("paper2").textContent;
//console.log(p2o3);
let result = "";
function myFunR1() {
  return p1o1;
}
function myFunS1() {
  return p1o2;
}
function myFunP1() {
  return p1o3;
}
function myFunR2() {
  return p2o1;
}
function myFunS2() {
  return p2o2;
}
function myFunP2() {
  return p2o3;
}

function getResult() {
  if (myFunR1() == "Rock" && myFunP2() == "Paper") {
    result = "Player 2 wins";
  } else if (myFunR1() == "Rock" && myFunS2() == "Scissors") {
    result = "Player 1 wins";
  } else if (myFunR1() == "Rock" && myFunR2() == "Rock") {
    result = "It's a tie";
  } else if (myFunS1() == "Scissors" && myFunR2() == "Rock") {
    result = "Player 2 wins";
  } else if (myFunS1() == "Scissors" && myFunS2() == "Scissors") {
    result = "It's a tie";
  } else if (myFunS1() == "Scissors" && myFunP2() == "Paper") {
    result = "Player 1 wins";
  } else if (myFunP1() == "Paper" && myFunP2() == "Paper") {
    result = "It's a tie";
  } else if (myFunP1() == "Paper" && myFunS2() == "Scissors") {
    result = "Player 2 wins";
  } else if (myFunP1() == "Paper" && myFunR2() == "Rock") {
    result = "Player 2 wins";
  }
  document.getElementById("result").innerHTML = result;
}
