// Calculadora

function calcular() {
  let operacao = document.getElementById("operacao");
  let operando = operacao.options[operacao.selectedIndex].value;

  const output = document.getElementById("output");

  let valor1 = document.getElementById("valor1");
  let valor2 = document.getElementById("valor2");
  let resultado = 0;

  if (operando == "somar") {
    if (isNaN(valor1.value) || valor1.value == "") {
      alert("Insira os valores para efetuar o cálculo!");
    } else if (isNaN(valor2.value) || valor2.value == "") {
      alert("Insira os valores para efetuar o cálculo!");
    } else {
      resultado = parseFloat(valor1.value) + parseFloat(valor2.value);
      output.innerHTML = `O resultado da soma é ${resultado}`;
      valor1.value = "";
      valor2.value = "";
    }
  } else if (operando == "subtrair") {
    if (isNaN(valor1.value) || valor1.value == "") {
      alert("Insira os valores para efetuar o cálculo!");
    } else if (isNaN(valor2.value) || valor2.value == "") {
      alert("Insira os valores para efetuar o cálculo!");
    } else {
      resultado = valor1.value - valor2.value;
      output.innerHTML = `O resultado da subtração é ${resultado}`;
      valor1.value = "";
      valor2.value = "";
    }
  } else if (operando == "multiplicar") {
    if (isNaN(valor1.value) || valor1.value == "") {
      alert("Insira os valores para efetuar o cálculo!");
    } else if (isNaN(valor2.value) || valor2.value == "") {
      alert("Insira os valores para efetuar o cálculo!");
    } else {
      resultado = valor1.value * valor2.value;
      output.innerHTML = `O resultado da multiplicação é ${resultado}`;
      valor1.value = "";
      valor2.value = "";
    }
  } else if (operando == "dividir") {
    if (isNaN(valor1.value) || valor1.value == "") {
      alert("Insira os valores para efetuar o cálculo!");
    } else if (isNaN(valor2.value) || valor2.value == "") {
      alert("Insira os valores para efetuar o cálculo!");
    } else {
      resultado = valor1.value / valor2.value;
      output.innerHTML = `O resultado da divisão é ${resultado}`;
      valor1.value = "";
      valor2.value = "";
    }
  } else {
    alert("Selecione a operação desejada..");
  }
}
