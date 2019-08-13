import React, {Component, Fragment} from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Formulario from "./../widgets/Formulario";

class App extends Component{

    constructor(){
        // siempre que una clase extiende a otra y tenga constructor, lo primero es el super()
        super()
        this.state = {
            links : ["perfil", "portfolio", "contacto"],
            contador : 0,
            usuario : "",
            mostrar : false,
            usuarios : []
        }
        this.aumentarContador = this.aumentarContador.bind(this)
        this.mostrarFormulario = this.mostrarFormulario.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    aumentarContador(){
        this.setState({ contador : this.state.contador + 1 })
    }
    mostrarFormulario(){
        this.setState({ mostrar : !this.state.mostrar })
    }
    handleChange(e){
        this.setState({ usuario : e.target.value })
    }
    handleSubmit(e){
        e.preventDefault();
        // LA VIEJA FORMA
        // let copia = this.state.usuarios.slice(0)
        // copia.push(this.state.usuario)
        this.setState({ 
            usuarios : [...this.state.usuarios, this.state.usuario], 
            usuario : "" })
    }
    
    render(){
        let {links, contador, usuario, mostrar, usuarios} = this.state
        return (
            <Fragment>
                <Header links={links} />
                <Main/>
                <p>Contador : {contador}</p>
                <button onClick={this.aumentarContador}>+</button>
                {mostrar ?
                    <Formulario handleChange={this.handleChange} handleSubmit={this.handleSubmit} usuario={usuario} usuarios={usuarios}/>
                    : null
                }
                <button onClick={this.mostrarFormulario}>mostrar</button>
                <Footer/>
            </Fragment> 
        )
    }
}

export default App