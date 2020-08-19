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
