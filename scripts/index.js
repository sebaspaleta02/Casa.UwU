/* Global */
var saludo = "Hola , bienvenido al mejor sitio web";
if(saludo){
    var saludo = "Puede ser mejor el sitio web";
    console.log(saludo);
}

/* Limitadas */
let nombre = "Paco";
if(nombre){
    let nombre = "Chucho";
    console.log(nombre);
}
console.log(nombre);

/* Inmutables */

const negocio = "Taquitos";
console.log(negocio);
/* const negocio = "Tortas"; */

/* --------- */

/* String */
let pais = "Mexico";
console.log(pais);

/* Number */
let edad = 35;
let decimal = 3.1416;
console.log(edad,"",decimal);

/* Boolean */
let verdadero = true; 
let falso = false;
console.log(verdadero + falso);

/* Undefined */
let indefinido = undefined;
console.log(indefinido);

/* Null */
let nulo = null;
console.log(nulo);

/* Concatenar */
console.log('Hola mi nombre es ' + nombre + ' tengo ' + edad + " años ");

/* Interpolación de texto */
console.log(`Hola mi nombre es ${nombre} tengo ${edad} años`);

/* Comparación */
let contraseña2 = "666";
let contraseña1 = prompt("Cúal es la contraseña? (es:666)" );

if(contraseña1==contraseña2){
alert("Contraseña correcta");
let valor1 = parseFloat(prompt("Digita cualquier valor:"));
let valor2 = parseFloat(prompt("Digita otro valor:"));
let suma = valor1 + valor2;
alert(`La suma de esos valores es: ${suma}`);
}
else
{
    alert("Contraseña incorrecta");
}

/* Funciones - suma */
alert("Esta función realiza una suma de números: ")
function suma1 (a,b,c){
let resultado = a + b + c;
console.log(resultado);
}
const resultado1 = function (x,y,z){
return x + y + z;
}
let a = parseFloat(prompt("Digita un numero: "));
let b = parseFloat(prompt("Digita un numero: "));
let c = parseFloat(prompt("Digita un numero: "));
alert("Esta es la suma " + resultado1(a,b,c));

/* Funciones - comparación */
alert("Esta función realiza una comparación de números: ")

function comparación1 (a,b,c){
let resultado = a + b + c;
console.log(resultado);
}

const resultado2 = function (x,y,z){
return x + y + z;
}
let d = parseFloat(prompt("Digita un numero: "));
let e = parseFloat(prompt("Digita un numero: "));
alert("Esta es la comparación " + resultado1(a,b,c));