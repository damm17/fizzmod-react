let a = document.querySelector("a");
a.addEventListener("click", (e)=>{
    e.preventDefault();
    let p = document.createElement("p");
    let div = document.createElement("div");
    let button_a = document.createElement("button");
    let button_b = document.createElement("button");

    p.innerText = "Está seguro que quiere abandonar la página?";
    button_a.innerText = "Aceptar";
    button_b.innerText = "Cancelar";
    button_a.id = "aceptar";

    let f = document.createDocumentFragment();
    f.appendChild(p);
    f.appendChild(button_a);
    f.appendChild(button_b);

    // Para prevenir que se creen múltiples divs con los botones, creo un condicional para chequear si ya existe uno de los botones en el DOM
    let aceptar = document.getElementById("aceptar");
    if (!aceptar) {
        document.body.appendChild(div);
        div.appendChild(f);
    }

    button_a.addEventListener("click",()=>{
        location.href = e.target.href;
    });

    button_b.addEventListener("click",()=>{
        document.body.removeChild(div);
    });
});

