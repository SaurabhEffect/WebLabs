document.getElementById("btn").addEventListener("click", () => {
  const num1Input = document.querySelector(".num1").value;
  const num2Input = document.querySelector(".num2").value;
  const resultDisplay = document.querySelector(".result");
  const operator = document.getElementById("selectOp").value;
  const errorDisplay = document.getElementById("error");

  const num1 = parseFloat(num1Input);
  const num2 = parseFloat(num2Input);

  let calculationResult;

  if (isNaN(num1) || isNaN(num2)) {
    errorDisplay.innerHTML = "Please enter valid numbers in both fields.";
    resultDisplay.innerHTML = "Result";
    return;
  }

  switch (operator) {
    case "plus":
      calculationResult = num1 + num2;
      break;
    case "min":
      calculationResult = num1 - num2;
      break;
    case "dev":
      if (num2 === 0) {
        errorDisplay.innerHTML = "Error: Cannot divide by zero.";
        resultDisplay.innerHTML = "Result";
        return;
      }
      calculationResult = num1 / num2;
      break;
    case "multi":
      calculationResult = num1 * num2;
      break;
  }

  errorDisplay.innerHTML = "";
  resultDisplay.innerHTML = parseFloat(calculationResult.toFixed(5));
});
