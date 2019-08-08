// OOP - part 2
/*

Constructor = Función.prototype
Instancia.__proto__ === Class.prototype
En prototype se suelen poner metodo/propiedades que se comparten entre todas las instancias de clase.
Atributos de configuración de propiedades de objetos:
value - writable - configurable - enumerable
Object.defineProperty()
Object.defineProperties()
Object.create()

function Persona(nombre,edad){
    Object.defineProperty(this, "nombre", {
        value : nombre,
        writable : false,  // Permisos de escritura
        enumerable : false, // Permisos de iterabilidad
        configurable : false // Permisos de borrado
    })
    this.nombre = nombre
    this.edad = edad
    Persona.prototype.saludar = function(){
        console.log(`Hola soy ${this.nombre}`)
    }
}

let juan = new Persona("Juan", 30)
let ana = new Persona("Ana", 30)

// Herencia:
// Subclass.prototype = Object.create(Superclass.prototype)

Empleado.prototype = Object.create(Persona.prototype) -> Herencia en JS. Empleado hereda el prototype de Persona.
Empleado.prototype.constructor = Empleado -> Le reasigno un constructor a la clase hija (lo pierde en la herencia. Es opcional)

// Composicion
// SuperClass.{apply|call}(this, ...arg)



// Modelo Clasico
// function Persona(nombre, edad){
    this.nombre = nombre
    this.edad = edad
    Persona.prototype.saludo = function(){}
}

function Empleado(){
    Persona.call(this, ...arg)
}
Empleado.prototype = Object.create(Persona.prototype)

// ES6
class Persona {
    constructor(nombre,edad){
        this.nombre = nombre
        this.edad = edad
    }
    saludo(){

    }
}
class Empleado extends Persona{
    constructo(sueldo, nombre, edad){
        super(nombre, edad)
        this.sueldo = sueldo
    }
    trabajar(){
        console.log("Trabajando...")
    }
}

*/