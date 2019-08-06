// var xhr = new XMLHttpRequest

// xhr.addEventListener("readystatechange",()=>{
//     console.log(`Nuevo Estado ${xhr.readyState}`)

// })

// xhr.addEventListener("load",()=>{
//     if (xhr.status == 200) {
//         document.body.innerText = xhr.response
//     }
// })

// xhr.open("get","info.txt");

// xhr.send();

// Promise / Futures / Defered (jQuery)
/*
Es un placeholder de un valor que se va a completar a futuro. Esto evita tener el valor que necesitamos aen un callback, sino que directamente ya tenemos una variable con ese valor.
No necesariamente estan ligadas a un pedido de ajax.



let promesa = new Promise((resolver, rechazar)=>{
    // Aca podemos hacer lo que sea. Eventualmente esta funcion va a resolver en el valor que estamos prometiendo.
    resolver();
    rechazar();
});
 
status: pending - resolved - rejected - settled
value: Any - Le podemos asignar cualquier valor a una promesa
Una vez que una promesa cambia de estado y se le asigna el valor, lo cual pasa al mismo tiempo, no puedo volver a cambiarle ninguno de los dos

Siempre tiene que haber un then() y catch() despues de una promesa.

Promise.then(callback Function) => Se va a ejecutar cuando la promesa cambia su estado a resolved
Promise.catch(callback Function) => Se va a ejecutar cuando el estado cambia a rejected

console.log(promesa);


Fetch = XHR + Promise
Fetch = Es un pedido por HTTP que implementa promesas en su interior + Request, Response, Header, Body, Stream
Por defecto solo necesita una URL y hace un pedido de HTTP por GET.
REST = Representational State Transfer

fetch() => Promise (la ejecucion de un fetch siempre devuelve una promesa)
Promise => Promise.then().catch()
fetch() => Response
Response => Response.metodo()
.fn(()=>{Promise}) => .fn(()=>{return})
.fn(()=>{Promise, Promise*n}) => .fn(()=>{ return Promise.all([Promise, Promise]) })

metodos : text | arrayBuffer | blob | json
*/
let url = "https://jsonplaceholder.typicode.com";



// console.log(fetch(`${url}/users`));
// fetch(`${url}/users`)
// .then((respuesta)=>{
//     // 2da promesa
//     return respuesta.json()
// })
// .then((respuesta)=>{
//     let id = respuesta[8].id
//     return fetch(`${url}/posts?userId=${id}`)
// })
// .then((respuesta)=>{
//     return respuesta.json()
// })
// .then((respuesta)=>{
//     let arr = []
//     respuesta.forEach((post)=>{
//         arr.push(fetch(`${url}/comments?postId${post.id}`))
//     })
//     return Promise.all(arr)
// })
// .then((respuesta)=>{
//     let arr = []
//     respuesta.forEach((response)=>{
//         arr.push(response.json())
//     })
//     return Promise.all(arr)
// })
// .then((respuesta)=>{
//     console.log(respuesta)
// })
// .catch((error)=>{
//     console.log(error)
// })