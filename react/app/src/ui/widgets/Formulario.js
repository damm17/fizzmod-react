import React, {Component} from "react";

class Formulario extends Component {
    render() {
        let {handleSubmit,handleChange,usuario} = this.props
        return (
            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder="Usuario" onChange={handleChange} value={usuario}/>
                <button>Guardar</button>
            </form>
        )
    }
}


export default Formulario