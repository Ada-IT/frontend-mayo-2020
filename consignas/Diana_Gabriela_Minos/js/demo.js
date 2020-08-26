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


//while
function mostrarNumeros() {
    var n = 3;
    while (n <= 5) {
        console.log('contando: ' + n);
        n++;
    }
    return n;
}

//while
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

//for
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


//arrays
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

function ordenarTabla() {
    let frutas = ['Manzana', 'Pera', 'Kiwi', 'Naranja', 'Arandanos']; //Array de datos
    let frutasordenadas = frutas.sort();
    var celdas = '';
    for (var i = 0 <= 5; i++;) {
        celdas = celdas + '<tr><td>' + frutasordenadas[i] + '</tr></td>';
        console.log('celdas: ' + celdas); //debug
    }
    cambiarTexto('mitabla', celdas);
}
let objeto = {
    1: ['Gabi', 'Minos', '40'],
    2: ['Juan', 'Perez', '37'],
};

let emp = [];
emp[0] = 'Casey Jones';
emp[1] = 'Phil Lesh';
emp[2] = 'August West';


let empl = [];
let listempleados = '';
let listaordenadaempleados = '';

function agregarEmpleado() {
    nuevoempleado = obtenerContenidoEmpleado('empleado');
    empl.push(nuevoempleado);
    console.log('mi empleado: ' + nuevoempleado); //debug
    mostrarNuevoEmpleado(nuevoempleado);
    return empl;
}

function obtenerContenidoEmpleado(elemento) {
    var data = document.getElementById(elemento).value;
    return data;
}

function ordenarEmpleados() {
    empleadosordenados = empl.sort(); //ordeno mi array
    console.log('empleados ordenados' + empleadosordenados);
    empleadosordenados.forEach(item => {
        listaordenadaempleados = listaordenadaempleados + '<tr><td>' + item + '</tr></td>'; //lo guardo en la variable
        console.log('lista tabla: ' + listaordenadaempleados);
    });
    cambiarTexto2('mitabla', listaordenadaempleados);
    return empleadosordenados;
}

function mostrarNuevoEmpleado(empleado) {
    listempleados = listempleados + '<tr><td>' + empleado + '</tr></td>';
    console.log('celdas: ' + listempleados); //debug
    mitabla = cambiarTexto2('mitabla', listempleados);
    return empleado;
}

//let colors ) ['red', 'green', 'blue'];
//utilizando for
//for (let i = 0; i < colors.length; i++){
//console.log(colors[i]);
//}

//foreach
//colors.forEach(function(color){
//console.log(color)
//})

//forEach con arrow function
//colors.forEach(color => console.log(color))

/**
 * validar_documento: este método sirve para...
 * @param {object} doc 
 * @author
 * @copyright
 * @return number
 */

function validar_documento(doc) {
    var tipo_doc = doc.value;
    switch (tipo_doc) {
        case 'dni':
            cambiarTexto('doc_seleccionado', 'Usted seleccionó DNI');
            console.log('DNI de nª caracteres: ' + tipo_doc.length);
            break;
        case 'cuit':
            var data = (document.getElementById('doc_seleccionado').innerHTML = 'Usted seleccionó CUIT');
            console.log('cuit en mayúsculas: ' + tipo_doc.toUpperCase());
            break;
        case 'PASAPORTE':
            alert('Usted seleccionó Pasaporte');
            console.log('PASAPORTE en minúsculas: ' + tipo_doc.toLowerCase());
            break;
        default:
            alert('Tipo de documento no válido. Seleccione otro.');
            console.log('Tipo de docmento no válido.');
    }

}

function focused() {
    document.getElementById('foco').style = 'Color: red';
    //document.getElementById('foco').style = 'background-color: black';
}



