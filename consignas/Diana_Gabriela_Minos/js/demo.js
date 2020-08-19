function alerta(data) {
    alert(data);
}
function suma(a, b) {
    resultado = a + b;
    return resultado;
}
function capitalize(data) {
    capitalized = data;
    return capitalized;
}

//nombredefuncion(parametro)
function cambiarColor(color) {
    document.getElementById("demo").style.backgroundColor = color;

}

function cambiarWidth(width) {
    document.getElementById('demo2').style.width = width;
}

function cambiarWidthFijo() {
    miwidth = "30%";
    document.getElementById('demo2').style.width = miwidth;

}

function cambiarTexto() {
    document.getElementById('demo2').innerHTML = "Hola Mundo!!!";

}

function cambiarTexto(elemento, mitexto) {
    document.getElementById(elemento).innerHTML = mitexto;
}

function obtenerContenido(elemento) {
    var data = document.getElementById(elemento).textContent;
    alert(data);
    return data;
}

function obtenerContenido2(elemento, mitexto) {
    if (elemento == 'demo2') {
        document.getElementById(elemento).innerHTML = 'hola mundo';
    } else {
        document.getElementById(elemento).innerHTML = mitexto;
    }
}

function sumar(elemento) {
    //con parseInt convierto a entero el string del valor
    var n1 = parseInt(document.getElementById('a').value);
    var n2 = parseInt(document.getElementById('b').value);
    var total = n1 + n2; //sumo resultados
    console.log('mi suma es: ' + total);
    data = document.getElementById(elemento).innerHTML = 'resultado:' + total;
    console.log(data);
}


