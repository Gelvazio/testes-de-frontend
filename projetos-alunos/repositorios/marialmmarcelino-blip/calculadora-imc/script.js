function calcular(){
     
    const nome= document.getElementById("nome").volue;
    const altura= parseFloat(document.getElementById("altura").volue);
    const peso= parseFloat(document.getElementById("peso").volue);

    const resultado= document.getElementById("resultado");

    if(nome===""||isNaN (altura)|| isNaN(peso)){
        resultado .innerHTML ="preencha todos os campos!";
        return
    }
    const imc=peso / (altura* altura);

    let classificacao;
    if(imc<18.5){
        classificacao = "abaixo do peso";
    }
    else if(imc<25){
        classificacao="peso normal";
    }
    else if(imc<30){
        classificacao = "sobre peso";
    }
    else{
        classificacao = "obesidade";
    }
    resultado.innerHTML = "ola," +  nome + "! seu IMC é: " + imc.toFixed(2) + classificacao + ": " + classificacao
    
}