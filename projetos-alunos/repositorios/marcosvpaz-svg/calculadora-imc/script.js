const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (event){

    event.preventDefault();

    const nome = document.getElementById("nome").ariaValueMax;
    const altura = Number(document.getElementById("altura").value);
    const peso =  Number(document.getElementById("peso").value);

    const resultado = document.getElementById("resultado");

    if (altura <= 0 || peso <= 0){
        resultado.innerHTML="Digite valores válidos.";
        return;
    }

    const imc = peso / (altura * altura);

    let classificacao ="";

    if (imc<18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc < 25) {
        classificacao = "peso normal";
    } else if (imc < 30) {
        classificacao = "Sobrepeso";
    } else if (imc < 35) {
        classificacao = "Obesidade grau I";
    } else if (imc < 40) {
        classificacao = "Obesidade grau II";
    } else {
        classificacao = "Obesidade grau III";
    }

    resultado.innerHTML = `<strong>${nome}</strong><br><br>Seu IMC é: <strong>${imc.toFixed(1)}</strong><br><br>Classificação: <strong>${classificacao}</strong>` 

});