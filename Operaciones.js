function calculate() {
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    var op = document.getElementById("operador").value;
    var result;

    if (op == "suma") {
      result = n1 + n2;
    } else if (op == "resta") {
      result = n1 - n2;
    } else if (op == "multi") {
      result = n1 * n2;
    } else if (op == "divi") {
      result = n1 / n2;
    }

    document.getElementById("resultado").innerHTML = result;
  }