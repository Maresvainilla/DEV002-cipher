
 const cipher = {

  
  encode: function (desplazamientos,mensaje) {
  const letras= "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //cadena de letras para usar el index of 
  let cadenavacia=[]
  let resultado=[]
  desplazamientos=(desplazamientos%26+26)%26; //modulo 2 veces el resultado le sumaos 26 asegurando que si es negativo quede positivo 
                                                   //y al hacer modulo estara seguro que sera entre 0 y 25
  if(mensaje){    // si hay texto  se empieza a recorrer la cadena  y se empiezan a rotar con for 
    for (let i=0; i<mensaje.length; i++){  //
      if(letras.indexOf(mensaje[i])!=-1){  //comporbando que la letra este en la cadena (array), si es otro no lo va encontrar 
                                              //y lo dejara asi porque ondexof dvuelve -1 si no lo encuentra
        let posicion =((letras.indexOf(mensaje[i])+desplazamientos)%26); //gurada la letra la posicion de la letra y se hace el claculo del desplzamiento 
      
        let resultado =letras[posicion];   // agregamos el valor de posicion a la variable de resultado 
      
        cadenavacia.push (resultado);
      }
      else {
        resultado = mensaje[i];//si no es letra devuve lo que esta como numeros simbolos
        //console.log (cadenavacia)
        } 
    }
    return cadenavacia.join('');
  }
 
},




DEcode: function (desplazamientos,mensaje) {
  const letras= "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //cadena de letras para usar el index of 
  let cadenavacia=[]
  desplazamientos=(desplazamientos%26-26)%26; //modulo 2 veces el resultado le sumaos 26 asegurando que si es negativo quede positivo 
                                                   //y al hacer modulo estara seguro que sera entre 0 y 25
  if(mensaje){    // si hay texto  se empieza a recorrer la cadena  y se empiezan a rotar con for 
    for (let i=0; i<mensaje.length; i++){  //
      if(letras.indexOf(mensaje[i])!=-1){  //comporbando que la letra este en la cadena (array), si es otro no lo va encontrar 
                                              //y lo dejara asi porque ondexof dvuelve -1 si no lo encuentra
        let posicion =((letras.indexOf(mensaje[i])-desplazamientos)%26); //gurada la letra la posicion de la letra y se hace el claculo del desplzamiento 
        
        let resultado =letras[posicion];   // agregamos el valor de posicion a la variable de resultado 
        cadenavacia.push (resultado);
      }
      else {
        resultado = mensaje[i];//si no es letra devuve lo que esta como numeros simbolos
        } 
    }
    return cadenavacia.join('');
    
  }
},
};
export default cipher;
