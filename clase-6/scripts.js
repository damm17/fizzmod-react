// OOP -> Paradigma de Prototipos
// Prototipo -> Es un objeto. Se visualiza a través de la propiedad de lectura __proto__. Si un objeto no pude encontrar una propiedad en su interior, va a bajar tantos prototipos como haya en su cadena, hasta encontrarla o devolver un error.
// Object - Function
// Funciones : Objetos especiales con la habilidad de ser ejecutados, de orden superior, variadicas, con ámbito(scope) y contexto.
// De orden superior -> que se puede tratar como una variable comun (pasar como parametro, por ej)
// Variadicas -> Puede recibir + o - argumentos de los declarados en la función como parametros
// Scope -> El alcance que tiene una función para llegar a distintas variables dentro de un programa. (global/local/closure) -> Closure : Es un espacio reservado de memoria que se genera entre una función definida adentro de otra función. Todas las variables intermedias quedan "atrapadas" en esete ámbito y son "intocables".
/*
function externa(){
    let a = 10
    let interna = () => {
        console.log(a)
    }
    return interna
}
let resultado = externa()
*/
// Contexto -> Es una referencia al objeto que contiene a la misma función (default) y se puede encontrar en la variable "this". El contexto no es estático y puede cambiar dependiendo de la ejecuion de la misma o de la decision del desarrollador.
// bind - call - apply - new
/*
foo.call(this,param1,param2) => 'this' siempre es un objeto
foo.apply(this,[param1,param2])
foo.bind(this,param1,param2) => No ejecuta, retorna una copia de la misma función enlazada con los parametros que se le pasaron.
*/
// Operador New -> Ejecuta la función que tiene al lado, pero le reasigna su contexto con un objeto nuevo y vacío. Cuando termina la ejecución, retorna ese objeto.
// Funciones constructoras -> por convención se escriben con mayúscula. Cualquier función es potencial constructora (o sea, se puede usar con el operador New).