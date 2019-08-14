import React, {Component , Fragment} from "react";
import ListadoUsuarios from "./ListadoUsuarios"

class Formulario extends Component {
    render() {
        let {handleSubmit,handleChange,usuario, usuarios} = this.props
        return (
            <Fragment>
                <button onClick={this.mostrarFormulario}>mostrar</button>
                <form action="" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Usuario" onChange={handleChange} value={usuario}/>
                    <button>Guardar</button>
                </form>
                <ListadoUsuarios usuarios={usuarios}/>
            </Fragment>
            
        )
    }
}


export default Formulario

// tinyurl.com/y3y7mvbe