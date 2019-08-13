import React, {Component} from "react";
import Usuario from "./Usuario"

class ListadoUsuarios extends Component {
    render() {
        let {usuarios} = this.props
        return (
            <ul>
                {usuarios.length ? 
                    usuarios.map(usuario => <Usuario key={usuario} usuario={usuario}/>) 
                : <li>No hay usuarios</li> }
            </ul>
        )
    }
}

export default ListadoUsuarios