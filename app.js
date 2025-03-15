let amigos =[];
let sorteados = [];
let inputAmigo = document.getElementById('amigo');
let listaAmigos = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');


function agregarAmigo() {
    let nombre = inputAmigo.value.trim();
    
    if (nombre !== '' && !amigos.includes(nombre)) {

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
        li.textContent = amigos [i];
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length < 2) {
        resultado.innerHTML = 'Debe haber al menos dos amigos en la lista para sortear';
        return;
    }

    let asignaciones = {};
    let amigosRestantes = [...amigos];  

    for (let amigo of amigos) {
        let opcionesValidas = amigosRestantes.filter(a => a !== amigo);
        
        if (opcionesValidas.length === 0) {
            return sortearAmigo(); 
        }
     
     let elegido = opcionesValidas[Math.floor(Math.random() * opcionesValidas.length)];
         asignaciones[amigo] = elegido;
         amigosRestantes = amigosRestantes.filter(a => a !== elegido);
    }
    
    resultado.innerHTML = Object.entries(asignaciones)
    .map(([amigo, sorteado]) => `${amigo} ha sorteado a ${sorteado}`)
    .join('<br>');
}
         



     

 