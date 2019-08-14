let estadoInicial = {
    contador : 0,
    links : ['perfil', 'portfolio', 'contacto'],
    mostrar : false
}

let reducer = (estado=estadoInicial,action) => {
    switch(action.type){
        case "CONTADOR_AUMENTAR" : 
            return {...estado , contador : estado.contador + 1}
        case "CONTADOR_DISMINUIR" : 
            return {...estado , contador : estado.contador - 1}
        case "CONTADOR_RESETEAR" : 
            return {...estado , contador : 0}
        case "FORMULARIO_MOSTRAR" :
            return {...estado , mostrar : !estado.mostrar}
        default : 
            return estado 
    }
}

export default reducer