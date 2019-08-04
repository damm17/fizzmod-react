/* 
1- Agarrar todos los links
2- recorrer todos los links y asignarles un evento de click. El callback de todos los links tiene que EL MISMO
3 - Cancelar el default
4 - Iniciar un pedido XHR al href del link que corresponda
5 - Con la respuesta , modificar el contenido del <main> 
 */

//Agarro todos los links
let links = document.querySelectorAll('nav a');

// Recorro el array de links con un foreach() y les asigno un evento de click.
links.forEach(function(element) {
    element.addEventListener("click", e => {
        // Prevengo el comportamiento por default para que no carguen una página nueva
        e.preventDefault();
        // Creo una variable para guardar el target del link al que le haga click
        let href = e.target.href;
        // Separo el string por el caracter '/', lo cual me devuelve un array
        href = href.split("/");
        // Reasigno la variable al último valor del array (que es el nombre del archivo en cuestión)
        href = href[href.length-1];
        // Creo un condicional para poder volver al home (opcional)
        if (href != "index.html") {
            let xhr = new XMLHttpRequest;
            // Abro la conexión y le asigno un evento para ejecutar funciones cuando mi archivo esté cargado y sin errores
            xhr.addEventListener("load",()=>{
                if (xhr.status == 200) {
                    // Si todo está OK, agarro al #main y le borro todo el contenido a través de un while()
                    let main = document.getElementById("main");
                    let child = main.lastElementChild;
                    while (child) { 
                        main.removeChild(child); 
                        child = main.lastElementChild; 
                    }
                    // Cuando finaliza el borrado le inyecto el contenido del documento que traje por XHR
                    main.innerHTML = xhr.response;
                }
            });
            xhr.open("get", href);
            xhr.send();
        }
    });
});

