/*
React se separa en : react y react-dom
react te sirve para crear componentes. react-dom te sirve para que una vez que tengas un componente lo puedas inyectar en el dom
cada componente va en su propio archivo

1- Tiene que siempre estar la variable React en scope. (line 12)
2- Un componente de React es una función.
3- Todos los componentes de React tienen que retornar algo: Otro componente de React | String | DomNode (etiqueta)
4- Todos los componentes de React van en Mayúscula
5- Los componentes se escriben en JSX para ejecutarlos
*/

// ES6
import React from "react"
import ReactDOM from "react-dom"
// CommonJS
// const React = require("react")
let App = () => "Hola Mundo"

ReactDOM.render(
    <App/>,
    document.getElementById("root")
)