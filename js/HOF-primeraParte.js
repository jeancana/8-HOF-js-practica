//alert("prueba")

// **************** FUNCIONES DE ORDEN SUPERIOR o FUNCIONES DE ALTO ORDEN ********************

// SON AQUELLAS que retornar una FUNCION o reciben una FUNCION por Parametro,  otra manera de desirlo funcion que utiliza funciones como entrada o salida 

// NOTA: A este nivel nos enfocamos SOLO en recibir funciones como Parametro, NO retornamos creamos Funciones que retornen Otras Funciones

// funcion a la Salida
// 1 - Funcion que retorna una funcion (Ejemplo) - Su intencion es crear una funcion que tenga MAS de una funcionalidad

// Te permite tener con la misma funcion - Distintas funcionalidades
function multiplicador(n) { 
    return function (m) {
        return n*m 
     }
}

// Funcionalidad 1 - Creando un Duplicador 
const duplicador = multiplicador(2)
console.log(duplicador(10))
console.log(duplicador(20))
console.log(duplicador(5))
console.log('')

// Funcionalidad 2 - Creando un Triplicador 
const triplicador = multiplicador(3)
console.log(triplicador(10))
console.log(triplicador(20))
console.log(triplicador(5))
console.log('')

// Otro Ejemplo 

function mayorQue(n) {
    return (m) => m > n
}

// Logica Operando ---> let mayorQueDiez = (m)=>m > 10
let mayorQueDiez = mayorQue(10)

console.log(mayorQueDiez(12))
console.log(mayorQueDiez(8)) 
console.log('')

// Otro Ejemplo 

function asignarOperacion(op) {
    if (op == "sumar") {
        return (a, b) => a + b
    } else if (op == "restar") {
        return (a, b) => a - b
    }
}

let suma = asignarOperacion("sumar")
let resta = asignarOperacion("restar")

console.log(suma(4, 6)) 
console.log(resta(5, 3))
console.log('')
