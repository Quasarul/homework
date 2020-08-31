const button = document.getElementById("button");
button.onclick = function () {
  //Grab user's values
  const name = document.getElementById("name").value;
  const gender = document.getElementById("gender").value;
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;
  let bmiResult = "";

  //Apply formula
  let bmiFormula = weight / (height * height);
  bmiFormula = bmiFormula.toFixed(2);

  //Check BMI range
  if (parseFloat(bmiFormula) < 18.5) {
    bmiResult = "Slender";
  } else if (parseFloat(bmiFormula) == 18.5 || bmiFormula < 25) {
    bmiResult = "Normal";
  } else if (parseFloat(bmiFormula) == 25 || bmiFormula < 30) {
    bmiResult = "Overweight";
  } else if (parseFloat(bmiFormula) > 30) {
    bmiResult = "Obese";
  }

  //Clear input values
  document.getElementById("name").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("height").value = "";
  document.getElementById("weight").value = "";

  //Show user's final result
  document.getElementById("result").innerHTML +=
    "Hello " +
    name +
    " your gender is " +
    gender +
    " your height is " +
    height +
    " your weight is " +
    weight +
    " and your BMI is " +
    bmiResult +
    "<br>";
};

//Clear results
const btnClear = document.getElementById("clear");
btnClear.onclick = function () {
  document.getElementById("result").innerHTML = "";
};
