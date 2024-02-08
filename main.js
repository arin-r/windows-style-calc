document.addEventListener("DOMContentLoaded", function () {
  const calculator = document.querySelector(".calculator");
  const resultPrimary = calculator.querySelector(".result-container-primary");

  let expression = ""; 

  function updateDisplay() {
    resultPrimary.value = expression;
  }

  function resetCalculator() {
    expression = "";
    updateDisplay();
  }

  function handleButtonClick(e) {
    const target = e.target;
    const buttonValue = target.textContent;

    if (target.matches("[data-operator]")) {
      console.log("target.matches('[data-operator]')");
      if (buttonValue == "=") {
        try {
          expression = eval(expression).toString(); 
        } catch (error) {
          expression = "Error"; 
        }
      } else {
        expression += buttonValue;
      }
    } else if (target.matches("[data-number]")) {
      expression += buttonValue;
    } else if (target.matches('[data-option="dot"]')) {
      expression += ".";
    } else if (target.matches('[data-option="clear"]')) {
      resetCalculator();
    } else if (target.matches('[data-option="clearEntry"]')) {
      expression = expression.slice(0, -1);
    } else if (target.matches('[data-option="undo"]')) {
      expression = expression.slice(0, -1);
    }

    updateDisplay();
  }

  calculator.addEventListener("click", handleButtonClick);
});
