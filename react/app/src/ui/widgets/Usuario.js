import React, {Component} from "react";

class Usuario extends Component {
    render() {
        let {usuario} = this.props
        return (
            <li>{usuario} <button>-</button></li>
        )
    }
}

export default Usuario