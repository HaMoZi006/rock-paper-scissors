const jogadas  = ["Tesoura", "Pedra", "Papel", "Tesoura", "Pedra"]


let vitoria:number = 0
let derrota:number = 0
let empate:number = 0


const resulJogo = document.getElementById("resultado") as HTMLElement
const statusElement = document.getElementById("status") as HTMLElement



const pedraButton = document.getElementById("pedra") as HTMLElement
const papelButton = document.getElementById("papel") as HTMLElement
const tesouraButton = document.getElementById("tesoura") as HTMLElement


pedraButton.addEventListener("click", ()=> {
    jogar(1)
})
papelButton.addEventListener("click", ()=> {
    jogar(2)
})
tesouraButton.addEventListener("click", ()=> {
    jogar(3)
})
 
function jogar(escolha){
    const compMove = Math.floor((Math.random()*3) + 1)
    if(jogadas[escolha + 1] === jogadas[compMove]){
        derrota++
    }
    else if (jogadas[escolha-1] === jogadas[compMove]){
        vitoria++
    }
    else{
        empate++
    }


   
    const resultado = `Seu movimento = ${jogadas[escolha]} \n Movimento do computador = ${jogadas[compMove]}`
    resulJogo.textContent = resultado

    const status = `Vitórias = ${vitoria} Derrotas = ${derrota} Empate = ${empate}`
    statusElement.textContent = status
}
