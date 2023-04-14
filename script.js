const number = document.getElementById("stBotao");
const srtNum = document.getElementById("numeroSorteado");


function sortear(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  let numerosSorteados = [];
  
  while (numerosSorteados.length < 6) {
    let numeroAleatorio = sortear(1, 60);
    if (!numerosSorteados.includes(numeroAleatorio)) {
      numerosSorteados.push(numeroAleatorio);
    }

    number.addEventListener("click", () => {
        srtNum.innerHTML = numerosSorteados;
    })
    
}
  