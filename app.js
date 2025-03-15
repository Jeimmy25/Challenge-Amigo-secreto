let amigos =[];
let sorteados = [];
let inputAmigo = document.getElementById('amigo');
let listaAmigos = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');
let parejas = [];

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
    amigos.forEach(amigo => {
        let li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearUno() {
    if (amigos.length < 2) {
        resultado.innerHTML = 'Debe haber al menos dos amigos en la lista para sortear';
        return;
    }

    if (parejas.length === amigos.length - 1) {
        resultado.innerHTML += '<br>El sorteo ha finalizado.';
        return;
    }
    let opciones = [...amigos];
    let elegido = null;
    let amigo = opciones.shift();   

     for (let i = 0; i < opciones.length; i++) {
        if (opciones[i] !== amigo) {
            elegido = opciones[i];
            opciones.splice(i, 1);
            break;
        }
     }
     if (elegido === null) {
        resultado.innerHTML = 'Error en el sorteo. Reiniciando...';
        return;
    }
    
    parejas.push({ amigo, elegido });
    amigos = opciones;

     resultado.innerHTML += `<br>${amigo} ha sorteado a ${elegido}`;
     actualizarLista ();
    
     if (parejas.length === amigos.length) {
        setTimeout(() => resultado.innerHTML += '<br>El sorteo ha finalizado.', 1000);
     }
    }          



     

 