document.addEventListener('DOMContentLoaded', () =>{
    const lampada = document.querySelector('img')
    const ligar = document.getElementById('ligar')
    const desligar = document.getElementById('desligar')
    let rota = false 
      
    ligar.addEventListener('click', () => {
        if(rota==false){  
        lampada.src = "https://www.w3schools.com/js/pic_bulbon.gif"
        }
    })
    desligar.addEventListener('click', () => {
        if(rota==false){
        lampada.src = "https://www.w3schools.com/js/pic_bulboff.gif"
        }
    })
    lampada.addEventListener('mouseover', () =>{
        if(rota==false){
        lampada.src = "https://www.w3schools.com/js/pic_bulbon.gif"
        }
    }) 
    lampada.addEventListener('mouseleave', () =>{
        if(rota===false){
        lampada.src = "https://www.w3schools.com/js/pic_bulboff.gif"
        }
    }) 
    lampada.addEventListener('dblclick',() =>{
        rota = true;
            lampada.src = "Quebradasem.png"
    })
  
})
