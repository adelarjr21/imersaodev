// Conversor de moeda

function converterMoedaDolar() {
  const valorInserido = document.querySelector(".valorInserido1");
  const output = document.querySelector(".output1");
  let valorConvertido;

  if (isNaN(valorInserido.value) || valorInserido.value == "") {
    alert("Insira um número");
  } else {
    valorConvertido = valorInserido.value * 5.67;
    output.innerHTML = `US$ ${valorInserido.value
      } é equivalente à R$ ${valorConvertido.toFixed(2)}`;
    valorInserido.value = "";
  }
}

function converterMoedaReal() {
  const valorInserido = document.querySelector(".valorInserido2");
  const output = document.querySelector(".output2");
  let valorConvertido;

  if (isNaN(valorInserido.value) || valorInserido.value == "") {
    alert("Por favor, insira os valores desejados.");
  } else {
    valorConvertido = valorInserido.value / 5.67;
    output.innerHTML = `R$ ${valorInserido.value
      } é equivalente à US$ ${valorConvertido.toFixed(2)}`;
    valorInserido.value = "";
  }
}