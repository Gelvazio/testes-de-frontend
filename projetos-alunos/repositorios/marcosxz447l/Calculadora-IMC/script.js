document.addEventListener('DOMContentLoaded',()=>{
    formulario.addEventListener('submit', (e) =>{
    e.preventDefault()
    const nome = document.getElementById('nome').value
    const altura = document.getElementById('altura').value
    const peso = document.getElementById('peso').value
    const resultado = document.getElementById('resultado')

    const imc = peso / (altura * altura);
    let classificaçao;
    if(imc<18.5) classificaçao = "Abaixo do peso"
    else if(imc>=30) classificaçao = "Sobrepeso"
    else if(imc<=24.9) classificaçao = "Peso Normal"
    else if(imc>=40) classificaçao = "obesidade grau II"
    else if(imc>=48) classificaçao = "Obesidade grau I"
    else classificaçao = "Obesidade grau III"

    resultado.textContent = 
    nome + " seu IMC é: " + imc.toFixed(1)+ " clasificação: "+ classificaçao;
    })
})