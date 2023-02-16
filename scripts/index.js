let dom_titulo = document.getElementById('MOD');
dom_titulo.style.color = "#F25C21";
dom_titulo.innerHTML = '<h2>No tardes, escribe tu nombre aquí:</h2>';

let dom_lista = document.createElement('ul');
dom_lista.innerHTML = '<li>Producto a</li>'+'<li>Producto b</li>'+'<li>Producto c</li>';
let dom_listaPadre = document.getElementById('UL2');
dom_listaPadre.appendChild(dom_lista);


let btnPadre = document.getElementById('btn');
btnPadre.addEventListener('click' , () =>{
    alert('Diste click');
})

//Guardar item
const guardar_info =()=>{
    let btn1Padre = document.getElementById('btn1');
    let btn2Padre = document.getElementById('btn2');

    if(btn1Padre.value == null || btn1Padre.value==''){
        alert('Sin Items');
    }else{
        localStorage.setItem(`${btn1Padre.value}`);
    }
    let set_inventario = document.getElementById('inventario');
    let stringlocal = JSON.stringify(localStorage);
    let objectlocal = JSON.parse(stringlocal);
    set_inventario.innerText ='';
    /* Object.entries(objectlocal.array.forEach(([key, value]) => {
        set_inventario.innerHTML += `<p id="${key}">${key}:${value}<button oneclick="borrar_item('${key}');">Eliminar</button></p>`;
    });)
} */

/* let nb = prompt("Cúal es tu nombre: ");
let zapatos2 = [
    { marca: 'Nike', stock: 8, precios: 150.30 },
    { marca: 'Puma', stock: 7, precios: 80.5 },
    { marca: 'Adidas', stock: 6, precios: 70.41 },
    { marca: 'Converse', stock: 8, precios: 120.8 },
]; */