// Los action siempre retornan un objeto {}, como minimo tienen tener la propiedad type:
export let aumentarContador = () => ({type:"CONTADOR_AUMENTAR"})
export let disminuirContador = () => ({type:"CONTADOR_DISMINUIR"})
export let resetearContador = () => ({type:"CONTADOR_RESETEAR"})
export let mostrarFormulario = () => ({type:"MOSTRAR_FORMULARIO"})
