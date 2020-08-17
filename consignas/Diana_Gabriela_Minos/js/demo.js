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
    document.getElementById("demo2").style.width = width;
}

function cambiarWidthFijo() {
    miwidth = "30%";
    document.getElementById("demo2").style.width = miwidth;

}

function cambiarTexto() {
    document.getElementById("demo2").innerHTML = "Hola Mundo!!!";
}

