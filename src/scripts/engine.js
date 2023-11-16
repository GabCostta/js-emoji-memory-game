// Lista de emojis para o jogo
const emojis = [
  "🐱",
  "🐱",
  "🦝",
  "🦝",
  "🦊",
  "🦊",
  "🐶",
  "🐶",
  "🐵",
  "🐵",
  "🦁",
  "🦁",
  "🐯",
  "🐯",
  "🐮",
  "🐮",
];

// Array para armazenar temporariamente as cartas abertas
let openCards = [];

// Embaralha os emojis usando o método de ordenação com uma função de comparação aleatória
let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

// Loop para criar as cartas no jogo
for (let i = 0; i < emojis.length; i++) {
  let box = document.createElement("div");
  box.className = "item";
  box.innerHTML = shuffleEmojis[i];
  box.onclick = handleClick;
  document.querySelector(".game").appendChild(box);
}

// Função chamada quando uma carta é clicada
function handleClick() {
  // Verifica se há menos de duas cartas abertas
  if (openCards.length < 2) {
    this.classList.add("boxOpen");
    openCards.push(this);
  }

  // Se duas cartas estão abertas, aguarda 500ms e chama a função para verificar a correspondência
  if (openCards.length == 2) {
    setTimeout(checkMatch, 500);
  }

  // Exibe no console as cartas abertas (para fins de depuração)
  console.log(openCards);
}

// Função para verificar se as duas cartas abertas são correspondentes
function checkMatch() {
  if (openCards[0].innerHTML === openCards[1].innerHTML) {
    // Se correspondem, adiciona a classe 'boxMatch' para destacar as cartas
    openCards[0].classList.add("boxMatch");
    openCards[1].classList.add("boxMatch");
  } else {
    // Se não correspondem, remove a classe 'boxOpen' para ocultar as cartas
    openCards[0].classList.remove("boxOpen");
    openCards[1].classList.remove("boxOpen");
  }

  // Limpa o array de cartas abertas para a próxima rodada
  openCards = [];

  // Verifica se todas as cartas têm a classe 'boxMatch', indicando que o jogador venceu
  if (document.querySelectorAll(".boxMatch").length === emojis.length) {
    alert("Você venceu!");
  }
}
