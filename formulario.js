var formulario = document.querySelector("#form")

document.getElementById ("formulario").onsubmit = function(e) { // El codigo no esta bien formulario ya que le faltaba llamar a la funcion GetElementById. se modifico.

 e.preventDefault(); // para la funcion e.event falta el default
  
  var n = formulario.elements[0]; // se le agrego el punto y coma
  var e = formulario.elements[1]; // se le agrego el punto y coma
  var na = formulario.elements[2]; // se le agrego el punto y coma

  var nombre = n.value; // se le agrego el punto y coma
  var edad = e.value; // se le agrego el punto y coma

  var i = na.selectedIndex
  var nacionalidad = na.options[i].value
  console.log(nombre, edad); // se le agrego el punto y coma
  console.log(nacionalidad); // se le agrego el punto y coma

  if (nombre.length === 0) {
    n.classList.add("error"); // se le agrego el punto y coma
  }
  if (edad < 18 || edad > 120) {
    e.classList.add("error"); // se le agrego el punto y coma
  }

if (nombre.length > 0 
  && (edad > 18 
    && edad < 120) ) {
  agregarInvitado(nombre, edad, nacionalidad); // se le agrego el punto y coma
}
  }


var botonBorrar = document.createElement("button"); // se le agrego el punto y coma

botonBorrar.textContent = "Eliminar invitado";
botonBorrar.id = "boton-borrar";
var corteLinea = document.createElement("br"); // se le agrego el punto y coma

document.body.appendChild(corteLinea); // se le agrego el punto y coma

document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

var lista = document.getElementById("lista-de-invitados"); // se le agrego el punto y coma
}

var elementoLista = document.createElement("div"); // se le agrego el punto y coma

elementoLista.classList.added("elemento-lista"); // se le agrego el punto y coma
lista.appendChild(elementoLista); // se le agrego el punto y coma

var spanNombre = document.createElement("span"); // se le agrego el punto y coma
var inputNombre = document.createElement("input"); // se le agrego el punto y coma
var espacio = document.createElement("br"); // se le agrego el punto y coma
spanNombre.textContent = "Nombre: "; // se le agrego el punto y coma
inputNombre.value = nombre; // se le agrego el punto y coma
elementoLista.appendChild(spanNombre); // se le agrego el punto y coma
elementoLista.appendChild(inputNombre); // se le agrego el punto y coma
elementoLista.appendChild(espacio); // se le agrego el punto y coma

function crearElemento(descripcion, valor) {
var spanNombre = document.createElement("span"); // se le agrego el punto y coma
var inputNombre = document.createElement("input"); // se le agrego el punto y coma
var espacio = document.createElement("br");// se le agrego el punto y coma
spanNombre.textContent = descripcion + ": "
inputNombre.value = valor 
elementoLista.appendChild(spanNombre); // se le agrego el punto y coma
elementoLista.appendChild(inputNombre); // se le agrego el punto y coma
elementoLista.appendChild(espacio); // se le agrego el punto y coma
}

crearElemento("Nombre", nombre); // se le agrego el punto y coma
crearElemento("Edad", edad); // se le agrego el punto y coma
crearElemento("Nacionalidad", nacionalidad); // se le agrego el punto y coma


var botonBorrar = document.createElement("button"); // se le agrego el punto y coma
botonBorrar.textContent = "Eliminar invitado";
botonBorrar.id = "boton-borrar";
var corteLinea = document.createElement("br"); // se le agrego el punto y coma
elementoLista.appendChild(corteLinea); // se le agrego el punto y coma
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove(); // se le agrego el punto y coma
  }
}
