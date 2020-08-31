$(document).ready(function () {
  // Do something
  // console.log("Loaded");
  $("button").click(function () {
    console.log("Clicked!");
    // Get user input
    let name = $("#name").val();
    let initialCredit = $("#initialCredit").val();
    let yearsNumber = $("#yearsNumber").val();
    let currency = $("#currency").val();

    // Validate user input
    if (
      name == "" ||
      initialCredit == "" ||
      yearsNumber == "" ||
      currency == ""
    ) {
      alert("Please fill in all fields");
    }

    // Create a viariable to store the result
    let result;
    let interest;

    // Calculate credit
    if (currency === "USD") {
      interest = 5;
    } else if (currency === "EUR") {
      interest = 10;
    }

    result = initialCredit + ((initialCredit * interest) / 100) * yearsNumber;

    // Display result ot user
    $("div#result").fadeIn(2000);
    $("div#result").text("Your credit is " + result);

    // Clear result
    $("#name").val("");
    $("#initialCredit").val("");
    $("#yearsNumber").val("");
  });
});
