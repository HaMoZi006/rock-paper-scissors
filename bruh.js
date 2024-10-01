var jogadas = ["Tesoura", "Pedra", "Papel", "Tesoura", "Pedra"];
var vitoria = 0;
var derrota = 0;
var empate = 0;
var resulJogo = document.getElementById("resultado");
var statusElement = document.getElementById("status");
var pedraButton = document.getElementById("pedra");
var papelButton = document.getElementById("papel");
var tesouraButton = document.getElementById("tesoura");
pedraButton.addEventListener("click", function () {
    jogar(1);
});
papelButton.addEventListener("click", function () {
    jogar(2);
});
tesouraButton.addEventListener("click", function () {
    jogar(3);
});
function jogar(escolha) {
    var compMove = Math.floor((Math.random() * 3) + 1);
    if (jogadas[escolha + 1] === jogadas[compMove]) {
        derrota++;
    }
    else if (jogadas[escolha - 1] === jogadas[compMove]) {
        vitoria++;
    }
    else {
        empate++;
    }
    var resultado = "Seu movimento = ".concat(jogadas[escolha], " \n Movimento do computador = ").concat(jogadas[compMove]);
    resulJogo.textContent = resultado;
    var status = "Vit\u00F3rias = ".concat(vitoria, " Derrotas = ").concat(derrota, " Empate = ").concat(empate);
    statusElement.textContent = status;
}
