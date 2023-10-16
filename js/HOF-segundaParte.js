//alert("prueba")

// **************** FUNCIONES DE ORDEN SUPERIOR o FUNCIONES DE ALTO ORDEN ********************
// NOTA: A este nivel nos enfocamos SOLO en recibir funciones como Parametro, NO creamos Funciones que retornen Otras Funciones

// Funcion en la entrada
// 2 - Funcion que RECIBE una FUNCION como Parametro 


//Ejemplo Nro.1 ---> Recibiendo como Parametro una funcion - Forma basica de hacerlo 

// Creo una funcion que recine un Array en el 1er parametro "arr" y una Funcion en el 2do Parametro "fn" para hacer algo

function porCadaElemento(array, funcionComoParametro) {
    
    // con un For..Of recorro cada elemento del Array
    for (const element of array) {
       
        //Usando la funcion fn y asignadole el paramentro 'element
        funcionComoParametro(element)
    }
}

const arrayNumeros = [1, 2, 3, 4, 5]

// Aca uso la Funcion creada "porCadaElemento", Logica Operando: 
// 1. Paso por el parametro 1 un array de Numeros 
// 2. Paso en el parametro 2 la funcion a ejecutar que sera en este caso la de "console.log" 
// 3. Ejecuto la funcion, recorre el array y luego consologuea cada elemento del array  

porCadaElemento(arrayNumeros, console.log)
console.log('')

//Ejemplo Nro.2 Usando el mismo ArrayNumeros y llamando la funcion acumular en vez de consologuear 

// Inicial el Acumulador en posicion Cero 0 
let acumulador = 0

function acumular(num) {
    acumulador += num
}

// Segunda Vez que eso la misma HOF que recibe como Paramentros una Funvcion pero ahora llamo a la funcion acumular 
porCadaElemento(arrayNumeros, acumular)
console.log(acumulador) 

// ****** MEJORANDO LA SINTAXIS USANDO ARROW FUNCTION - Directamente Sobre el Parametro *******

// Queremos Multiplicar por 2 cada Elemento del arrayNumero (Duplicar el valor de cada elemento)

// Creo un nuevo array donde van a ingresas los valores duplicados
const duplicadoArrayNumeros = []

// Creo la funcion directamente en el parametro Nro.2 como una funcion anomino "arrow function" - asi me ahorro lineas de codigo
porCadaElemento(arrayNumeros, (ingresoElemento) => {
    
    // Aca voy ingresando los elementos al nuevo array duplicadoArrayNumeros
    duplicadoArrayNumeros.push(ingresoElemento * 2 )
})

console.log(duplicadoArrayNumeros) // [2, 4, 6, 8]
console.log('')