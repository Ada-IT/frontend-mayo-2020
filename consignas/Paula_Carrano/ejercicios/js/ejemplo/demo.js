function alerta(data) {
   alert(data);
}
function suma(a, b) {
   resultado = a + b;
   return resultado;
}
function capitalize() {
   capitalized = data.toUpperCase;
   return
}

function cambiarColor(color) {
   document.getElementById("demo").style.backgroundColor = color;
}

function cambiarWidth(width) {
   document.getElementById("demo2").style.width = width;
}

function cambiarWidthFijo() {
   minwidth = "30%";
   document.getElementById("demo2").style.width = minwidth;
}

//reemplazo la data de un elemento
/**
 * cambiarTexto: este metodo sirve para...
 * @param {string} elemento: esto es un id de elemento
 * @param {string} mitexto: esto es un contenido nuevo
 */
function cambiarTexto(elemento, mitexto) {
   var data = (document.getElementById(elemento).innerHTML= mitexto);
}

//trae la info de un elemento especifico
function obtenerContenido(elemento) {
   var data= document.getElementById(elemento).textContent;
   alert (data);
   return data;
} 

function obtenerContenido2 (elemento) {
if (elemento == 'demo2'){
   document.getElementById(elemento).innerHTML ='hola mundo';
}
else {
   document.getElementById(elemento).innerHTML=mitexto;
}
}

//suma d
function sumar(elemento) {
   var n1=parseInt(document.getElementById("a").value); //parseInt es para hacer n enteros
   var n2=parseInt(document.getElementById("b").value);
   var total= n1+n2;
   console.log("mi suma es:" + total);
   data = document.getElementById (elemento).innerHTML= "Resultado: " + total;
   console.log (data);
   }

//ELSE IF
function obtenerContenido3 (elemento) {
if (elemento == 'demo2'){
   document.getElementById(elemento).innerHTML ='hola mundo';
}
else {
   document.getElementById(elemento).innerHTML= "pepecacs";
}
}

//WHILE
function mostrarNumeros() {
   var n=0;
   while(n<=5) {
      console.log('contando: ' + n);
      n++;  
   }
}

//TABLA CON DATOS DENTRO CON WHILE
function llenarTabla() { 
   var n=0;//contador
   var celdas = "";
   while (n <=5) {
      console.log("contando: "+ n); //debug
      celdas = celdas + '<tr><td>'+ n + '</td></tr>';
      console.log("celdas: "+ celdas);//debug
      n++;
   }
   mitabla= cambiarTexto("mitabla", celdas);
   return n;
}

//TABLA CON DATOS DENTRO CON FOR
function llenarTabla2() {
   var n=0;
   var celdas = "";
   for(var i=0; i<=5; i++){
      console.log("contando: "+ i);
      celdas = celdas + '<tr><td>'+ n + '</td></tr>';
      console.log("celdas: "+ celdas);
   }
   cambiarTexto("mitabla", celdas);
   return n;
}

//TABLA CON DATOS ARRAY
function llenarTabla3() {
   let frutas= ["manzana", "banana", "frutillas", "kiwi", "sandia", "naranja", "peras"];
   var celdas="";
   for(var i=0; i<=5; i++){
      console.log("contando: "+ i);
      celdas = celdas + '<tr><td>'+ frutas[i] + '</td></tr>';
      console.log("celdas: "+ celdas);
   }
   cambiarTexto("mitabla", celdas);
   console.log("mi array: "+ frutas.length);//cuantos elementos hay
   console.log("mi array posicion: "+ frutas[3]);//traer elemento de una posición
   return frutas;
}

function llenarTabla4() {
   let frutas= ["manzana", "banana", "frutillas", "kiwi", "sandia", "naranja", "peras"];
   var celdas= '<tr><td>'+ frutas[3] + '</td></tr>';
   cambiarTexto("mitabla", celdas); //mostrar en el pantalla el resultado
   }

   //objeto
let objeto = {
            1: ["Pau", "Carrano", "28"],
            2: ["Fran", "Morales", "30"],
               }

let emp=[];
emp[0]= 'Casey Jones';
emp[1]= 'Juan Perez';
emp[1]= 'Luis Riquelme';

//Funciones dentro de funciones
let empl=[];
let listempleados="";
let listaOrdenadaEmpleados="";

function agregarEmpleado(){
   nuevoEmpleado= obtenerContenidoEmpleado("empleado");
   empl.push(nuevoEmpleado);
   console.log ("mi empleado:"+ nuevoEmpleado);
   mostrarNuevoEmpleado(nuevoEmpleado);
   return empl;
}

function obtenerContenidoEmpleado (elemento){
   var data= document.getElementById(elemento).value;
   return data;
}

function ordenarEmpleados (){
   empleadosOrdenados= empl.sort();
   console.log("empleados ordenados" + empleadosOrdenados);
   
   empleadosOrdenados.forEach ((item) =>{
      listaOrdenadaEmpleados= listaOrdenadaEmpleados+"<tr><td>"+item+"</tr></td>";
   });
   cambiarTexto("mitabla",listaOrdenadaEmpleados);
   return empleadosOrdenados;
}

function mostrarNuevoEmpleado (empleado){
   listaOrdenadaEmpleados=listaOrdenadaEmpleados + "<tr><td>"+empleado+"</tr></td>";
   console.log("celdas:"+listempleados);
   mitabla=cambiarTexto("mitabla",listempleados);
   return empleado;
}

//SWITCH
function verificoNombre (nombre) {
   var animal=nombre;
   switch (animal) {
      case "Vaca":
      console.log("Esta Vaca subirá al Arca");
      break;
      case "Jirafa":
      console.log("Esta Jirafa subirá al Arca");
      break;
      case "Cerdo":
      console.log("Esta Cerdo subirá al Arca");
      break;
      default:
         console.log("Este animal no lo hara");
   }
}

/**
 *validar_documento: este metodo sirve para...
 * @param {object} doc
 * @author
 * @copyright
 * @return number: que retorna
 */
function validar_documento (doc) {
   var tipo_doc=doc.value;
   switch(tipo_doc){
      case "dni":
         cambiarTexto("doc_seleccionado", "Usted selecciono DNI");
         console.log ("DNI de n°.caracteres:" + tipo_doc.length);
         break;
      case "cuit":
         var data= (document.getElementById ("doc_seleccionado").innerHTML ="Usted selecciono CUIT");
         console.log ("CUIT en mayuscula:"+ tipo_doc.toUpperCase);
         break;
      case "pasaporte":
         alert("Usted selecciono Pasaporte");
            console.log ("PASAPORTE en minuscula" + tipo_doc.toLowerCase);
            break;
      default:
         alert("Tipo de documento no valido. Seleccione otro");
         console.log ("Esta opción no es correcta");
   }
}

function focused (){
   document.getElementById('foco').style="color: red"; 
   document.getElementById('foco').style="background-color: black"; 
}

//llave valor - siempre va coma para separar objetos
//let objeto ={
//   1: ["titulo" = "Producto1"],
//}

// INDEX OF - SPLICE

function eliminarDato(){
   let frutas =["manzana", "banana", "pera", "kiwi", "naranja", "arandanos"];
   console.log(frutas);
   fruta= frutas.indexOf ("Pera");
   
   if (frutas.length > fruta){
      frutas.splice(fruta, 1 );
   }
   
   console.log("mi array pos: ");
   return frutas;
}

//CONCAT
function strings_concat(cadena1, cadena2, cadena3){
   return cadena1.concat(cadena2,cadena3); 
}

function cualquiera(){
   cadena1 = "oh";
   cadena2 = "que maravillosa";
   cadena3 = "mañana"
   data = strings_concat(cadena1, cadena2, cadena3);
}

function array_concat(array1, array2, orden){
   if(orden == 1){
      data_resultante = array1.concat(array2);
   }else{
      data_resultante = array2.concat(array1);
   };
   return data_resultante;
}

function array_datas(){
   let array1 = ['a', 'b', 'c'];
   let array2 = [1,2,3,];
   //array3 = array_concat(array1,array2, 1);
   mi_array = array1.join('');// output array1= "abc"
   mi_array = array1.join(); // output array1= "a,b,c"
   mi_array = array1.join(';');// output array1= "a;b;c"
}

function filtro(array_data){
   const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

   const result = words.filter(word => word.length > 6);
   
   console.log(result);
   // expected output: Array ["exuberant", "destruction", "present"]
}

function array_find(){
   const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => parseInt(element) > 10);
// expected output: 12 es el primero que cumple la condicion
}

function array_flat(){ // busca el primer array hijo y lo pone en padre
   var arr1 = [1,2, [3,4]];
             //0 1    2 

   new_array = arr1.flat();
      //new_array = [1,2,3,4]
                  // 0 1 2 3

   var arr2= [1,2, [3,4, [5,6]]];
   new_array = arr2.flat();
   // new_array = [ 1,2,3,4, [5,6]];


   var arr3 = [1,2, [3,4, [5,6]]];
   new_array = arr2.flat(2); // es recursivo, se ejecuta dos veces
   // new_array = [ 1,2,3,4,5,6];
}

function array_map(){
   var arr_compra =[ 90, 180, 85,350]; // precio de compra atado al dolar
   var dolar_hoy = 79;
   var arr_compra_resultante= arr_compra.map(function (x){
      calculado = rts;
      return  calculado
      }
   );
   
  // var arr1 = [150,, 220, 115, 450]; // precio de venta
   var arr_venta= arr_compra_resultante.map(function (x){
      return  ((x *0.80) + x);
   }
   );

   //venta con IVA
   var arr_vta_iva = arr_venta.map(function (x){
      return  ((x *0.21) + x);
      }
   );
console.log(arr_resultante);
}

function array_map_text(){
   var arr_blog_art = ['titular 1','titular2','titular3','titular4'];
   var titulares = arr_blog_art.map(function(titular){
      titulo = corregir_ortografia(titular)
         poner_primera_letra_mayus = titular.charAt(0).toUpperCase()+ titular.slice(1);
         return (poner_primera_letra_mayus)
      }
   );
}


function array_to_string(){
   var arr_blog_articles= ['titular 1','titular2','titular3','titular4'];
   a = arr_blog_articles.toString
}

function array_lastIndexof(){
   var arr_blog_articles= ['titular 1','titular2','titular3','titular4'];
   a = arr_blog_articles.lastIndexOf(); // obtengo el ultimo elemento del aray
   // output => 3 == 'titular4'
}

function obtener_total_lista(){
   var arr_blog_articles= ['titular 1','titular2','titular3','titular4'];
   total = arr_blog_articles.lastIndexOf() + 1;
   // output => 3 == 'titular4'
}

function array_keys(){ //contiene las claves de índice con las que acceder a cada elemento en el array.
   const array1 = ['a', 'b', 'c'];
   const iterator = array1.keys();

   for (const key of iterator) {
      console.log(key);
   } 
   a = iterator.next(); // {value:0}
   a = iterator.next(); // {value:1}
   a = iterator.next(); // {value:2}
}

function array_reverse(){
   var arr_blog_articles= ['titular 1','titular2','titular3','titular4'];
   a = arr_blog_articles.reverse();
}

function poner_mayus(texto){
   return texto.charAt(0).toUpperCase() + texto.slice(1);
}

