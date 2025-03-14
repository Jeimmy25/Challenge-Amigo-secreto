let amigos [];
let inputAmigo = document.getElementById('amigo');
let listaAmigos = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');

function agregarAmigo() {
    let nombre = inputAmigo.value.trim();
    
    if (nombre !== '') {
        //// Añadimos el nombre al arreglo de amigos
        amigos.push(nombre);

        inputAmigo.value = '';
    
        actualizarLista ();
       listaAmigos.innerHTML = " ";
    } else {
        alert ("Por favor, ingrese un nombre")
   } 
}




     





  
        
  
  
        
  
  


  




     

 