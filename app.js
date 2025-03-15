let amigos =[];
let sorteados = [];
let inputAmigo = document.getElementById('amigo');
let listaAmigos = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');

function agregarAmigo() {
    let nombre = inputAmigo.value.trim();
    
    if (nombre !== '') {

        amigos.push(nombre);

        inputAmigo.value = '';
    
        actualizarLista ();

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

function sortearAmigo () {
    if (amigos.length === 0) {
        resultado.innerHTML = 'No hay amigos en la lista';
        return;
    }
    let amigosRestantes = amigos.filter(amigo => !sorteados.includes(amigo));

    if (amigosRestantes.length === 0) {
        resultado.innerHTML = '¡Todos los amigos ya han sido sorteados!';
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigosRestantes.length);
    let amigoSorteado = amigosRestantes[indiceAleatorio];

    sorteados.push(amigoSorteado); // Marcamos al amigo como sorteado
    resultado.innerHTML = `Su amigo secreto es: ${amigoSorteado}`;
        
  if (sorteados.length === amigos.length) {
            finalizarSorteo();
                
  }
} 

function finalizarSorteo() {
    resultado.innerHTML = '¡Todos los amigos han sido sorteados! El sorteo ha finalizado.';
}
  




     

 