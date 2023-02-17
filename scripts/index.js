/* Global */
var saludo = "Hola , bienvenido al mejor sitio web";
if (saludo) {
    var saludo = "Puede ser mejor el sitio web";
    console.log(saludo);
}

/* Limitadas */
let nombre = "Paco";
if (nombre) {
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
console.log(edad, "", decimal);

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
let contraseña1 = prompt("Cúal es la contraseña? (es:666)");

if (contraseña1 == contraseña2) {
    alert("Contraseña correcta");
    let valor1 = parseFloat(prompt("Digita cualquier valor:"));
    let valor2 = parseFloat(prompt("Digita otro valor:"));
    let suma = valor1 + valor2;
    alert(`La suma de esos valores es: ${suma}`);
}
else {
    alert("Contraseña incorrecta");
}

/* Funciones - suma */
alert("Esta función realiza una suma de números: ")
function suma1(a, b, c) {
    let resultado = a + b + c;
    console.log(resultado);
}
const resultado1 = function (x, y, z) {
    return x + y + z;
}
let a = parseFloat(prompt("Digita un numero: "));
let b = parseFloat(prompt("Digita un numero: "));
let c = parseFloat(prompt("Digita un numero: "));
alert("Esta es la suma " + resultado1(a, b, c));

/* Funciones - comparación semana 7 bucles*/
let edad2 = parseFloat(prompt("Digita tu edad:"));
if (edad2 >= 18) {
    console.log("Valido")
}
else {
    console.log("No valido")
}

/* Array semana 7*/

const array = [
    { nombre: 'Pepe', edad: '22', contraseña: '1234' },
    { nombre: 'Toño', edad: '23', contraseña: '1567' },
    { nombre: 'Juan', edad: '24', contraseña: '1789' },
    { nombre: 'Luis', edad: '25', contraseña: '1980' },
]
for (i = 0; i < array.length; i++) {
    console.log('Tu nombre será ' + array[i].nombre + ' tu edad será: ' + array[i].edad + ' y tu contraseña será: ' + array[i].contraseña);
}
/* swtich caso cine semana 7*/
let edad3 = parseInt(prompt("Digita tu edad para el caso del switch"));
if (edad3 >= 18) {
    edad4 = 'Mayor'
} else {
    edad4 = 'Menor'
}
switch (edad4) {
    case 'Mayor':
        console.log('Tienes descuento por ser mayor de edad del 25%');
        break;
    case 'Menor':
        console.log('Tienes descuento por ser menor de edad del 50%');
        break;

}
/* SEMANA 7 */
let zapatos = [
    { marca: 'Nike', stock: 8, precios: 150.30 },
    { marca: 'Puma', stock: 7, precios: 80.5 },
    { marca: 'Adidas', stock: 6, precios: 70.41 },
    { marca: 'Converse', stock: 8, precios: 120.8 },
];
zapatos.forEach(marcaZ => {
    console.log(marcaZ.marca);
});
zapatos.forEach(stockZ => {
    console.log(stockZ.stock);
});

/* Filtrado semana 7 */
const zapatosFiltrado = zapatos.filter(item => item.precios > 90);
console.log("Ahora las zapatillas mas caras: ", zapatosFiltrado);

zapatos.sort((a, b) => {
    if (a.marca < b.marca) {
        return -1;
    }
    if (b.marca == a.marca) {
        return 0;
    }
    return 1;
});

console.log("Filtrado por orden alfabetico: ", zapatos);

/* Promedio */
let prom2 = 0;
for (i = 0; i < zapatos.length; i++) {
    let prom = zapatos[i].precios;
    prom2 = prom2 + prom
};
console.log("El promedio es: ", prom2 / 4);

/* Mayor costo */
let max = 0;
zapatos.forEach(elemento => {
    console.log(elemento.precios);
    max = Math.max(elemento.precios, max);
});

console.log('El articulo mas caro es de: $', Math.round(max));

//semana 9
let dom_titulo = document.getElementById('MOD');
dom_titulo.style.color = "#F25C21";
dom_titulo.innerHTML = '<h2>No tardes, escribe tu nombre aquí:</h2>';

let dom_lista = document.createElement('ul');
dom_lista.innerHTML = '<li>Producto a</li>' + '<li>Producto b</li>' + '<li>Producto c</li>';
let dom_listaPadre = document.getElementById('UL2');
dom_listaPadre.appendChild(dom_lista);


let btnPadre = document.getElementById('btn');
btnPadre.addEventListener('click', () => {
    alert('Diste click');
})

//Guardar item
const guardar_item = () => {

    let btn1Padre = document.getElementById('N1');
    let btn2Padre = document.getElementById('btn2');

    if (btn1Padre.value == null || btn1Padre.value == '') {
        alert('Sin Items');
    } else {
        localStorage.setItem(`${btn1Padre.value}`);
    }
    let set_inventario = document.getElementById('inventario');
    let stringlocal = JSON.stringify(localStorage);
    let objectlocal = JSON.parse(stringlocal);
    set_inventario.innerText = '';

    Object.entries(objectlocal).forEach(([key, value]) => {
        set_inventario.innerHTML += `<p id="${key}">${key}:${value}<button oneclick="borrar_item('${key}');">Eliminar</button></p>`;
    });

    btn1Padre.value = '';
}
const borrar_item = (id) => {

    let item = document.getElementById('${id}');
    localStorage.removeItem('{id}');
    item.remove();
}
/* let nb = prompt("Cúal es tu nombre: ");
let zapatos2 = [
    { marca: 'Nike', stock: 8, precios: 150.30 },
    { marca: 'Puma', stock: 7, precios: 80.5 },
    { marca: 'Adidas', stock: 6, precios: 70.41 },
    { marca: 'Converse', stock: 8, precios: 120.8 },
];  */
/* Semana10 */
const lista = document.querySelector('#inventario');

index('./data.json')
    .then((res) => res.json())
    .then((data) => {
        data.forEach((producto) => {
            const li = document.createElement('li')
            li.innerHTML = `
             <h4>${producto.nombre}</h4>
             <p>${producto.precio}</p>
             <p>Codigo: ${producto.id}</p>
             <hr/>
              `
            lista.append(li);
        });
    })