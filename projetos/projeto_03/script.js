const frases = [
  "O único lugar onde o sucesso vem antes do trabalho é no dicionário.",
  "Acredite que você pode e você já está no meio do caminho.",
  "Grandes resultados requerem grandes ambições.",
  "A persistência é o caminho do êxito.",
  "O segredo do progresso é começar.",
  "Você é mais forte do que imagina e mais capaz do que jamais sonhou.",
  "Pequenos passos todos os dias levam a grandes conquistas.",
  "Não espere por oportunidades, crie-as.",
  "Sua única limitação é aquela que você impõe a si mesmo.",
  "A coragem não é a ausência de medo, mas a capacidade de avançar apesar dele."
]

const fraseTexto = document.querySelector(".frase")
const btnFrase = document.querySelector(".btnFrase")

function mostrarFrase(){
    let indice = Math.floor(Math.random() * frases.length)
    fraseTexto.textContent = frases[indice]
}

btnFrase.addEventListener("click", function(){
    mostrarFrase()
})