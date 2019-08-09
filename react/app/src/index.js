// // ES6
// import React, {Component, Fragment} from "react"
// import ReactDOM from "react-dom"
// // CommonJS
// // const React = require("react")

// // .jsx
// // *Componente Flecha*
// // let App = () => <p>Hola Mundo</p>
// // *Componente Standard*
// // function App() {
// //     return <p>Hola Mundo</p>
// // }
// // *Componente Clase*
// class App extends Component{
//     // Metodo obligatorio de clases
//     render(){
//         return (
//         <Fragment>
//             <p>Hola mundo</p>
//             <p>Hola mundo 2</p>
//         </Fragment>
//         )
//     }
// }


// ReactDOM.render(
//     <App/>,
//     document.getElementById("root")
// )

import React from "react";
import ReactDOM from "react-dom"
import App from "./ui/layout/App"

ReactDOM.render(
    <App/>,
    document.getElementById("root")
)