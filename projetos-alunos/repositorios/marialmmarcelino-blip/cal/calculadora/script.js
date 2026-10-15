function calcular() {

    const nome = document.getElementById("nome").value;
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);

    const resultado = document.getElementById("resultado");

    if (nome.trim() === "" || isNaN(altura) || isNaN(peso)) {
        resultado.innerHTML = "Preencha todos os campos!";
        return;
    }

    const imc = peso / (altura * altura);

    let classificacao;

    if (imc < 18.5) {
        classificacao = "abaixo do peso";
    } else if (imc < 25) {
        classificacao = "peso normal";
    } else if (imc < 30) {
        classificacao = "sobrepeso";
    } else {
        classificacao = "obesidade";
    }

    resultado.innerHTML =
        "Olá, " + nome + "! Seu IMC é: " + imc.toFixed(2) +
        " - " + classificacao;
}
