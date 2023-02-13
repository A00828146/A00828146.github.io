function calculate() {
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    var op = document.getElementById("operador").value;
    var result;

    if (op == "Suma") {
      result = n1 + n2;
    } else if (op == "Resta") {
      result = n1 - n2;
    } else if (op == "Multiplicación") {
      result = n1 * n2;
    } else if (op == "División") {
      result = n1 / n2;
    }

    document.getElementById("resultado").innerHTML = result;
  }