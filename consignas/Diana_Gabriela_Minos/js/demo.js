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

function cambiarTexto2(elemento, mitexto) {
    var data = (document.getElementById(elemento).innerHTML) = mitexto;
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
    data = document.getElementById(elemento).innerHTML = 'resultado: ' + total;
    console.log(data);
}

function obtenerContenido3(elemento, mitexto) {
    var data;
    if (elemento == 'demo2') {
        data = document.getElementById(elemento).innerHTML = 'hola mundo';
    } else {
        data = document.getElementById(elemento).innerHTML = mitexto;
    }
}

function mostrarNumeros() {
    var n = 3;
    while (n <= 5) {
        console.log('contando: ' + n);
        n++;
    }
    return n;
}

function llenarTabla() {
    var n = 0; //contador
    var celdas = ''; //variable para armar la tabla
    while (n <= 5) {
        console.log('contando: ' + n); //debug
        celdas = celdas + '<tr><td>' + n + '</td></tr>';
        console.log('celdas: ' + celdas); //debug
        n++;

    }
    mitabla = cambiarTexto2('mitabla', celdas);
    return n;
}

function llenarTabla2() {
    var n = 0;
    var celdas = '';
    for (var i = 0; i <= 5; i++) {
        console.log('contando: ' + i); //debug
        celdas = celdas + '<tr><td>' + n + '</td></tr>';
        console.log('celdas: ' + celdas); //debug
    }
    cambiarTexto2('mitabla', celdas);
    return n;
}

function llenarTabla3() {
    let frutas = ['Manzana', 'Banana', 'Pera', 'Kiwi', 'Naranja', 'Arandanos']; //array de datos
    var celdas = '';
    for (var i = 0; i <= 5; i++) {
        console.log('contando: ' + i); //debug
        celdas = celdas + '<tr><td>' + frutas[i] + '</td></tr>';
        console.log('celdas: ' + celdas); //debug
    }
    cambiarTexto2('mitabla', celdas);
    console.log('mi array: ' + frutas.length); //debug
    console.log('mi array pos 3: ' + frutas[3]); //debug
    return frutas;
}

function llenarTabla4() {
    let frutas = ['Manzana', 'Banana', 'Pera', 'Kiwi', 'Naranja', 'Arandanos']; //array de datos
    var celdas = '<tr><td>' + frutas[2] + '</td></tr>';
    cambiarTexto('mitabla', celdas);
}

