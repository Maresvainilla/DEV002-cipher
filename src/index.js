
import cipher from './cipher.js';  

//otener valores de los input 

let cajaM = document.getElementById("mensaje")
let desplazamientos=document.getElementById("desplazamientos")
const botonE=document.getElementById("btnENcode")
const botonD=document.getElementById("btnDEcode")
let cajaM2=document.getElementById("mensaje2")
let RESULTADO2 = document.getElementById("RESULTADO2")


//encode 
botonE.addEventListener("click",function(){
    let clave=desplazamientos.value
    let texto=cajaM.value
   

  
    if (cajaM.value ===""){
       
        alert("aun no escribes tu mensaje")
    }
    else{ 
    let texto2= cipher.encode(clave,texto)
    RESULTADO2.innerHTML=texto2

    cajaM2.innerHTML= cipher.encode(clave,texto)
   
    }
})


botonD.addEventListener("click",function(){
    let clave=desplazamientos.value
    let texto=cajaM.value
   
 
  
    if (cajaM.value ===""){
        
        alert("aun no escribes tu mensaje")
    }
    else{ 
    let texto2= cipher.DEcode(clave,texto)
 
    RESULTADO2.innerHTML=texto2

    cajaM2.innerHTML= cipher.DEcode(clave,texto)
 
       
    }
})

        











