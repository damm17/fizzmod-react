import React, {Component, Fragment} from "react";
import Header from "./Header";
import Main from "./Main";
import Formulario from "./../widgets/Formulario";
import Footer from "./Footer";

class App extends Component{

    constructor(){
        // siempre que una clase extiende a otra y tenga constructor, lo primero es el super()
        super()
        this.state = {
            links : ["perfil", "portfolio", "contacto"],
            contador : 0
        }
        this.aumentarContador = this.aumentarContador.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    aumentarContador(){
        this.setState({ contador : this.state.contador + 1 })
    }
    handleChange(){}
    handleSubmit(){}
    
    render(){
        let {links, contador} = this.state
        return (
            <Fragment>
                <Header links={links} />
                <p>Contador : {contador}</p>
                <button onClick={this.aumentarContador}>+</button>
                <Formulario handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
                <Main/>
                <Footer/>
            </Fragment> 
        )
    }
}

export default App