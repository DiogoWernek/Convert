// Cotação de moedas do dia.
const USD = 6.12;
const EUR = 7.22;
const GBP = 8.13;

// Obtendo elementos para serem trabalhados.
const main = document.querySelector("main");
const form = document.querySelector("form");
const amount = document.querySelector("#amount");
const currency = document.querySelector("#currency");
const footer = document.querySelector("main footer");
const description = document.querySelector("#description");
const result = document.querySelector("#result");

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
    // Atualizando o conteúdo e exibindo a cotação da moeda selecionada.
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`;

    // Calcula o total.
    let total = amount * price;

    // Formatar o total para Reais com vírgula
    total = formatCurrencyBRL(total).replace("R$", "");
    
    // Exibir o Resultado total.
    result.textContent = `${total} Reais`;

    // Verificar se é ou não um número.
    if(isNaN(total)) {
      return alert("Por favor, digite o valor corretamente para converter.")
    }

    // Aplica a classe que exibe o footer para mostrar o resultado.
    footer.classList.add("show-result");
  } catch (error) {
    // Remove a classe do footer removendo ele da tela.
    footer.classList.remove("show-result");
    alert("Não foi possível converter, tente novamente mais tarde.");
    console.log(error);
  }
}

// Função para formatar a moeda para o real brasileiro.
function formatCurrencyBRL(value) {
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
}