let amigos [];
let inputAmigo = document.getElementById('amigo');
let listaAmigos = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');

function agregarAmigo() {
    let nombre = inputAmigo.value.trim();
    
    if (nombre !== '') {
      // Creamos un elemento li para el nuevo amigo
      let li = document.createElement('li');
      li.textContent = nombre;
      
      // Agregamos el elemento li a la lista
      listaAmigos.appendChild(li);
      
      // Limpiamos el campo de texto
      inputAmigo.value = '';
    } else {
      alert('Por favor, ingrese un nombre');
    }
  }