// Función autoinvocada (IFEE). Función sin nombre con () inmediatamente después de que cierra la función
// Patrón de diseño Módulo
(function(){
    function interna(){

    }
    // NAMESPACE para JS
    window.int = interna
})(); // ; Obligatorios en estos casos

// Node.js : Entorno de desarrollo que puede correr JS (del lado del SO en vez del navegador)