let links = document.querySelectorAll('nav a');

links.forEach(function(element) {
    element.addEventListener("click", e => {
        e.preventDefault();
        let href = e.target.href;
        
        fetch(href)
        .then(respuesta => respuesta.text() )
        .then(respuesta => {
            let main = document.getElementById("main");
            let child = main.lastElementChild;
            while (child) { 
                main.removeChild(child); 
                child = main.lastElementChild; 
            }
            main.innerHTML = respuesta;
        })
        .catch(error => { console.log(error) })
    });
});

