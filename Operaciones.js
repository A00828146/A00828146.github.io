function calculate() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var op = document.getElementById("operator").value;
    var result;

    if (op == "add") {
      result = num1 + num2;
    } else if (op == "subtract") {
      result = num1 - num2;
    } else if (op == "multiply") {
      result = num1 * num2;
    } else if (op == "divide") {
      result = num1 / num2;
    }

    document.getElementById("result").innerHTML = result;
  }