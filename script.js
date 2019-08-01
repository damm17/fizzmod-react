// CLASE 02
// TIPOS DE DATOS

// undefined : una variable sin valor
// NULL : "referencia" a ningún objeto

// Primitivos: Se pasan por valor
// String : "" - '' - ``
// Boolean : true o false
//  True o {False|0|NULL|""|undefined}
// Number

// Objetos: Se pasan por referencia. Todos son matrices asociativas.
// -Object
// -Array
// -Function



/* WINDOW API
outer{width|height} => Number - medidas en pixeles del navegador
inner{width|height} => Number - medidas en pixeles del DOM
screen.{width|height} => Number - medidas de hardware
location => Object - Nos permite jugar con la barra de dirección
history.{back|forward|go(Number)} => Object - Nos permite jugar con el historial de la sesión
*/

// console.dir(Any) => Nos muestra una variable en formato Json
// console.table(Any) => Nos muestra una variable en formato tabular
// console.time("Label") | console.timeEnd("Label") => Para medir tiempo de ejecución
// console.error() | console.warn() 

/* DOM = Document Object Model
// Creación de Nodo (Etiqueta) => document.createElement("div")
// Selección de Nodo => document.getElementById()|getElementsByClassName()|getElementsByTagName() [Los dos ultimos devuelven un array]
// document.querySelector()|document.querySelectorAll() -> selectores de CSS
*/

// CLASE 03
/* 
var a = document.createElement("a");
a.innerHTML = "Hola Mundo";
// XSS = Cross-Site Scripting => Ataque JS con el innerHTML

a.innerText = "lo que sea"; => Agrega texto plano
//NodoTarget.appendChild(nuevoNodo);
document.body.appendChild(a);

a.dataset => seleccionar los "data-" definidos en html

var a_copia = a.cloneNode(true); => Hacer una copia entera o parcial de un nodo.

*/

/* 
EVENTOS 

a.addEventListener("click", function(e){
    console.log("asd");
    e.stopPropagation();
});

a.addEventListener("click", (e)=>{
    console.log("asd");
    e.preventDefault();
});



*/