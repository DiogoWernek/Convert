// Cotação de moedas do dia.
const USD = 6;
const EUR = 7;
const GBP = 8;

// Obtendo elementos para serem trabalhados.
const main = document.querySelector("main");
const form = document.querySelector("form");
const amount = document.querySelector("#amount");
const currency = document.querySelector("#currency");
const footer = document.querySelector("main footer");

// Manipulando o input amount para receber somente números.
amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g;
  amount.value = amount.value.replace(hasCharactersRegex, "");
});

// Capturando o Evento de submit do formulário.
form.onsubmit = (event) => {
  event.preventDefault();

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$");
      break;
  
    case "EUR":
      convertCurrency(amount.value, EUR, "€");
      break;

    case "GBP":
      convertCurrency(amount.value, GBP, "£");
      break;
  }
}

// Função para converter a moeda.
function convertCurrency(amount, price, symbol) {
  try {
    // Aplica a classe que exibe o footer para mostrar o resultado.
    footer.classList.add("show-result");
  } catch (error) {
    // Remove a classe do footer removendo ele da tela.
    footer.classList.remove("show-result");
    alert("Não foi possível converter, tente novamente mais tarde.");
    console.log(error);
  }

}