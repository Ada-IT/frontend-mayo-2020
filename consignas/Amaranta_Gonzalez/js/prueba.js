<script>
var nombre;
nombre = 'Ada';
var nombre2 = 'ITW';

//Concatenar strings
var nombrecompleto = + ' ' + 'nombre2';
respuesta = ADA ITW

var datobooleano = true;
respuesta = true;

//si no se que tipo de dato es puedo tener el siguient error
var numero = 30;
var suma numero + nombre

//cuando no se que tipo de dato es ¿como puedo reconocerlo?;
console.log(typeof nombre)
respuesta string


strings = "cadena de datos/caracteres"
boolean = true or false
intergeres = Numeros enteros

var nula = null
var vacia = ''
console.log(nombre2)

//operadores aritméticos
var miEdad = 20;
var edadDeMiHermano = 15;
var resultado = mi Edad +,-,*,/ edadDeMiHermano;
console.log(resultado);

//este tipo de operadores suelen utilizarce a través de librerias

//podemos decrementar, incrementar, multiplicar y dividir un numero con un operador automaticamente
vamos a tener lo siguiente, agregandole ++ el resultado seria:
var = 1
nombre++; //2   
numero++; //3
numero--; //2

var numero = 1 + numero; ---- numero++;

+ = suma
- = resta 
* = multiplicación
/ = división

//operadores de comparaciion simple y estricta

simple: compara dos valores y obtine un valor booleano
el resultado es true or false

var numero1 = 20;
var numero2 = 20;
var numero3 = 10;

¿es igual!
console.log(numero1 == numero2); //true
console.log(numero1 == numero#); //false

¿es distinto?
console.log(numero1 != numero2); //false
consolo.log(numero1 != numero2); //true 

console.log(numero2 < numero1); //false
console.log(numero1 < numero3); //false
console.log(numero1 > numero3); //true

console.log(numero1 >= numero2); //true
console.log(numero1 >= numero2); //true
console.log(numero1 <= numero3); //false

estricta: compara el valor y el tipo de dato

console.log(10 == '10'); //false
console.log(10 !== '10'); //true

var diez = '10' //tipo strings
var diez = 10 // tipo numero integer

operadores lógicos (and, if)
no permiten anidar condiciones, lo que puedes hacer es si dos condiciones son verdaderas para un caso especifio
pudes preguntar: si martha tiene novio y paula tiene novio aplicar tal condicion
ambos deben ser vrdadero

si el usuario puso un mail  puso la password correcta dejalo entrar a la pagina wb

and/y &&

var edad = 20;
var password = 'js1234';
var resultado = edad >= 18 && password === 'js1234';
console.log('resultado: ', resultado); //true

var edad = 20;
var password = 1234; // numerica interger
var resultado = edad >= 18 && password === '1234'; //tipo string
console.log('resultado: ', resultado); //false 

or/o ||
si uno O el otro es verdadero
solo es necesario que una sea verdadera
                    false    o       true            
var resultado = (edad >= 22) || (password ==='js1234');
console.log('resultado: ', resultado); //true


</script>