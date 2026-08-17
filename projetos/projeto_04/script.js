const btnEnviar = document.querySelector(".btnEnviar");
const senhaCorreta = "12345";

btnEnviar.addEventListener("click", function() {
    verificar();
});

function verificar() {
    const input = document.querySelector(".inputSenha");
    let inputValue = input.value;

    const senha = document.querySelector(".senha");

    for (let i = 0; i < 5; i++) {
        let number = senha.children[i];
        number.textContent = inputValue[i];
        number.classList.remove("certo", "erro");


        if(inputValue[i] == senhaCorreta[i]){
            number.classList.add("certo")
        } else {
            number.classList.add("erro")
        }
    }
}