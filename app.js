let amigos =[];
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

function actualizarLista () {
    listaAmigos.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

function sorterAmigo () {
    if (amigos.length > 0) {
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indiceAleatorio];
        resultado.innerHTML = `Su amigo secreto es: ${amigoSorteado}`;
  } else {
    resultado.innerHTML = 'No hay amigos en la lista';
  }
}
  
        
  
  


  




     

 