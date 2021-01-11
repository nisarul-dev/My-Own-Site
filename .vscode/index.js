function brickCalculator(n) {
  var error = "";
  if (n < 0) {
    error =
      "\nError: You Entered " +
      n +
      " Which is Nagative value. We are Considering " +
      n +
      " as " +
      Math.abs(n) +
      ". \n\nThe total brick you need for " +
      Math.abs(n) +
      " level Building is ";
    n = Math.abs(n);
    return error + calculation() + "\n";
  } else {
    return calculation();
  }

  function calculation() {
    if (n <= 10) {
      var takesBrick = n * 15 * 1000;
    } else if (n <= 20) {
      var takesBrick = ((n - 10) * 12 + 150) * 1000;
    } else if (n <= 45) {
      var takesBrick = ((n - 20) * 10 + 270) * 1000;
    } else {
      var takesBrick = "Illegal Building - The Building Will be Broken";
    }

    return takesBrick;
  }
}

console.log(brickCalculator(-5));
