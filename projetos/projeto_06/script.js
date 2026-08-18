let tarefas = []
let contadorId = 0

let inputText = document.querySelector(".inputText")
let btnEnviar = document.querySelector(".btnEnviar")
let lista = document.querySelector(".lista")

btnEnviar.addEventListener("click", function(){
    adicionarTarefa()
})

function adicionarTarefa() {
    //trim serve pra não ter espaço das pontas
    let texto = inputText.value.trim()
 
    if(texto !== "" ){
        contadorId++
        tarefas.push({id: contadorId , tarefa: texto , concluido:false})
        console.log(tarefas) 
    }
}