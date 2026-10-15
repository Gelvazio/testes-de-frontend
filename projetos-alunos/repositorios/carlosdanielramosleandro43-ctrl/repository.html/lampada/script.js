const lampada = document.getElementById("lampada");
const ligar = document.getElementById("ligar");
const desligar = document.getElementById("desligar");

const lampadaApagada = "https://www.w3schools.com/js/pic_bulboff.gif";
const lampadaAcesa = "https://www.w3schools.com/js/pic_bulbon.gif";
const lampadaQuebrada = "https://thumbs.dreamstime.com/b/ampola-quebrada-21064711.jpg";

let estado = "apagada";

ligar.addEventListener("click", function() {
    if (estado != "quebrada") {
        lampada.src = lampadaAcesa;
        estado = "acesa";
    }
});

desligar.addEventListener("click", function() {
    if (estado != "quebrada") {
        lampada.src = lampadaApagada;
        estado = "apagada";
    }
});

lampada.addEventListener("mouseover", function() {
    if (estado == "apagada") {
        lampada.src = lampadaAcesa;
        estado = "acesa";
    } else if (estado == "acesa") {
        lampada.src = lampadaApagada;
        estado = "apagada";
    }
});

lampada.addEventListener("mouseout", function() {
    if (estado == "apagada") {
        lampada.src = lampadaAcesa;
        estado = "acesa";
    } else if (estado == "acesa") {
        lampada.src = lampadaApagada;
        estado = "apagada";
    }
});

lampada.addEventListener("dblclick", function() {
    lampada.src = lampadaQuebrada;
    estado = "quebrada";
});