function alerta(data) {
  alert(data);
}

function suma() {
  resultado = a + b;
  return resultado;
}

function capitalize(data) {
  capitalized = data;
  return capitalized;
}

// nombredefuncion(parametro)
function cambiarColor(color) {
  var data = (document.getElementById("demo").style.backgroundColor = color);
}

function cambiarWidth(width) {
  var data = (document.getElementById("demo2").style.width = width);
}

function cambiarWidthFijo() {
  miwith = "30%";
  var data = (document.getElementById("demo2").style.width = miwith);
}

/**
 * cambiarTexto : este metodo sirve para...
 * @param {string} elemento : esto es un id de elemento
 * @param {string} mitexto  :  esto es el contenido nuevo
 */
function cambiarTexto(elemento, mitexto) {
  var data = (document.getElementById(elemento).innerHTML = mitexto);
}

function obtenerContenido(elemento) {
  var data = document.getElementById(elemento).textContent;
  alert(data);
  return data;
}

function obtenerContenido2(elemento, mitexto) {
  var data;
  if (elemento == "demo2") {
    data = document.getElementById(elemento).innerHTML = "hola mundo";
  } else {
    data = document.getElementById(elemento).innerHTML = mitexto;
  }
}

function sumar(elemento) {
  //con parseInt convierto a entero el string del valor
  var n1 = parseInt(document.getElementById("a").value);
  var n2 = parseInt(document.getElementById("b").value);
  var total = n1 + n2; // sumo resultados.
  console.log("mi suma es : " + total);
  data = document.getElementById(elemento).innerHTML = "Resultado: " + total;
  console.log(data);
}

function obtenerContenido3(elemento, mitexto) {
  var data;
  if (elemento == "demo2") {
    data = document.getElementById(elemento).innerHTML = "hola mundo";
  } else {
    data = document.getElementById(elemento).innerHTML = mitexto;
  }
}

function mostrarNumeros() {
  var n = 3;
  while (n <= 5) {
    console.log("contando: " + n);
    n++;
  }
  return n;
}

function llenarTabla() {
  var n = 0; //contador
  var celdas = ""; // variable para armar la tabla
  while (n <= 5) {
    console.log("contando: " + n); // debug
    celdas = celdas + "<tr><td>" + n + "</td></tr>";
    console.log("celdas: " + celdas); //debug
    n++;
  }
  mitabla = cambiarTexto("mitabla", celdas);
  return n;
}

function llenarTabla2() {
  var n = 0;
  var celdas = "";
  for (var i = 0; i <= 5; i++) {
    console.log("contando: " + i); // debug
    celdas = celdas + "<tr><td>" + n + "</td></tr>";
    console.log("celdas: " + celdas); //debug
  }
  cambiarTexto("mitabla", celdas);
  return n;
}

function llenarTabla3() {
  let frutas = ["Manzana", "Banana", "Pera", "Kiwi", "Naranja", "Arandanos"]; // array de datos
  var celdas = "";
  for (var i = 0; i <= 5; i++) {
    console.log("contando: " + i); // debug
    celdas = celdas + "<tr><td>" + frutas[i] + "</td></tr>";
    console.log("celdas: " + celdas); //debug
  }
  cambiarTexto("mitabla", celdas);
  console.log("mi array: " + frutas.length); //debug
  console.log("mi array pos 3: " + frutas[3]); //debug

  return frutas;
}

function llenarTabla4() {
  let frutas = ["Manzana", "Banana", "Pera", "Kiwi", "Naranja", "Arandanos"]; // array de datos
  var celdas = "<tr><td>" + frutas[2] + "</td></tr>";
  cambiarTexto("mitabla", celdas);
}

function ordenarTabla() {
  let frutas = ["Manzana", "Banana", "Pera", "Kiwi", "Naranja", "Arandanos"]; // array de datos
  let frutasordenadas = frutas.sort();
  var celdas = "";
  for (var i = 0; i <= 5; i++) {
    celdas = celdas + "<tr><td>" + frutasordenadas[i] + "</td></tr>";
    console.log("celdas: " + celdas); //debug
  }
  cambiarTexto("mitabla", celdas);
}
let frutas = ["Manzana", "Banana", "Pera", "Kiwi", "Naranja", "Arandanos"];

let objeto = {
  1: ["Maxi", "sorribas", "38"],
  2: ["Juan", "Perez", "37"],
};

let emp = [];
emp[0] = "Casey Jones";
emp[1] = "Phil Lesh";
emp[2] = "August West";

let empl = [];
let listempleados = "";
let listaordenadaempleados = "";

function agregarEmpleado() {
  nuevoempleado = obtenerContenidoEmpleado("empleado");
  empl.push(nuevoempleado);
  console.log("mi empleado:" + nuevoempleado); // debug
  mostrarNuevoEmpleado(nuevoempleado);
  return empl;
}

function obtenerContenidoEmpleado(elemento) {
  var data = document.getElementById(elemento).value;
  return data;
}

function ordenarEmpleados() {
  empleadosordenados = empl.sort(); //ordeno  mi array
  console.log("empleados ordenados " + empleadosordenados);

  empleadosordenados.forEach((item) => {
    listaordenadaempleados =
      listaordenadaempleados + "<tr><td>" + item + "</td></tr>"; // lo guardo en la variable
    console.log("lista tabla: " + listaordenadaempleados);
  });
  cambiarTexto("mitabla", listaordenadaempleados);
  return empleadosordenados;
}

function mostrarNuevoEmpleado(empleado) {
  listempleados = listempleados + "<tr><td>" + empleado + "</td></tr>";
  console.log("celdas: " + listempleados); //debug
  mitabla = cambiarTexto("mitabla", listempleados);
  return empleado;
}

//let colors = ['red', 'green', 'blue'];
// utilizando for
//for (let i = 0; i < colors.length; i++) {
//  console.log(colors[i]);
//}

// foreach
//colors.forEach(function(color) {
//  console.log(color)
//})

// foreach con arrow function
//colors.forEach(color => console.log(color))

function verificoNombre(nombre) {
  var animal = nombre;
  switch (animal) {
    case "Vaca":
      console.log("Este Vaca subirá al Arca de Noé.");
      break;
    case "Jirafa":
      console.log("Este Jirafa subirá al Arca de Noé.");
      break;
    case "Perro":
      console.log("Este Perro subirá al Arca de Noé.");
      break;
    case "Cerdo":
      console.log("Este Cerdo subirá al Arca de Noé.");
      break;
    default:
      console.log("Este animal no lo hará.");
  }
}

/**
 * validar_documento : este metodo sirve para ...
 * @param {object} doc
 * @author
 * @copyright
 * @return number
 */
function validar_documento(doc) {
  var tipo_doc = doc.value;
  switch (tipo_doc) {
    case "dni":
      cambiarTexto("doc_seleccionado", "Usted selecciono dni");
      console.log("DNI de n°. caracteres : " + tipo_doc.length);
      break;
    case "cuit":
      var data = (document.getElementById("doc_seleccionado").innerHTML =
        "Usted selecciono CUIT");
      console.log("cuit en masyusculas : " + tipo_doc.toUpperCase());
      break;
    case "PASAPORTE":
      alert("Usted selecciono Pasaporte");
      console.log("PASAPORTE EN minusculas : " + tipo_doc.toLowerCase());
      break;
    default:
      alert("Tipo de Documento no valido. Seleccione otro.");
      console.log("Tipo de Documento no valido.");
  }
}
/**
 *
 */
function focused() {
  document.getElementById("foco").style = "Color: red";
  //document.getElementById("foco").style = "background-color: black";
}
