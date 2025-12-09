// Quantidade de números da rifa
const totalNumeros = 50;

// Números já escolhidos (pode conectar depois num banco)
let numerosOcupados = [];

const grid = document.querySelector("#grid");

// Gera os números na tela
for (let i = 1; i <= totalNumeros; i++) {
  const div = document.createElement("div");
  div.classList.add("number");
  div.textContent = i;

  if (numerosOcupados.includes(i)) {
    div.classList.add("taken");
  }

  div.addEventListener("click", () => {
    if (numerosOcupados.includes(i)) return;

    localStorage.setItem("numeroSelecionado", i);
    window.location.href = "confirm.html";
  });

  grid.appendChild(div);
}
