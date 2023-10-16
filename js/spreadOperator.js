
// *********** HOF - SPREAD OPERATOR / Operador de Propagacion (...) *************** 

//El operador de propagación, conocido como el "Spread Operator", tiene como función principal:
//Permitirnos EXPANDIR O DISTRIBUIR los elementos de un array u objeto en las partes del codigo donde se admitan esos elementos, puede ser como parametro de una función o elementos en un nuevo array u objeto. 

// En JavaScript, el operador de propagación se denota mediante tres puntos suspensivos(...)



console.log('** 1. SPREAD OPERATOR - Operaciones con Arrays **')
// 1. SPREAD OPERATOR - Operaciones con Arrays
console.log('')

// 1.1 CREANDO LA COPIA de un Array usando el Operador de Propagacion - Usando un Nuevo Espacio en la Memoria

const arrayNros = [1, 2, 3, 4, 5] 
console.log(`El arrayNros contiene los siguientes elementeos: ${arrayNros}`)
// Verificando si es un Array 
console.log(`arrayNros es un Array? ${Array.isArray(arrayNros)}`)
console.log('')

// ""Creando la copia con el Spread Operator"" ---> Usamos un Nuevo Espacio en Memomeria  

let copiaArrayNros = [...arrayNros]
console.log(`El copiaArrayNros contiene los siguientes elementeos: ${copiaArrayNros}`)
// Verificando si es un Array 
console.log(`copiaArrayNros es un Array? ${Array.isArray(copiaArrayNros)}`)
console.log('')
//IMPORTANTE -  "Logica Operando": al Solicitar que se use la HOF Spread Operator le indicamos al programa que nos PROPAGUE/Distrubuya/copie los valores/DATOS contenidos en "arrayNros" en un nuevo array llamado "copiaArrayNros"


// 1.1 Ejemplo: UNIR los Elementos de 2 o mas Arrays, para CONFORMAR UN UNICO ARRAY usando el Operador de Propagacion - Usando un Nuevo Espacio en la Memoria

const array1 = [1, 2, 3]
const array2 = [4, 5, 6]
const array3 = [7, 8, 9]

const arrayResultante = [...array1, ...array2, ...array3]
console.log(arrayResultante)
console.log('')

// 1.2 Ejemplo: Agregando Elementos a Mano(Hardcodeado/Push) al array ---> Usamos un Nuevo Espacio en Memomeria 

const arrayResultante2 = [-1, 0, ...array1, ...array2, ...array3, 'String1', 'String2']
console.log(arrayResultante2)
console.log('')

console.log('** 2. SPREAD OPERATOR - Operaciones con Funciones **')

// 2. SPREAD OPERATOR - Operaciones con funciones
// Su Objetivo es simplificar las LLAMADAS a una FUNCION - propagando los Elementos

// ----- Ejemplo 1 : Crear una Funcion y Usar el Spread Operator para Realizar la llamada

function suma(numero1, numero2, numero3) { 

    const resultado = numero1 + numero2 + numero3 
    console.log(resultado)
}

// Distribuyendo el array1 en la llamada 
suma(...array1)
/* Logica Operando: 
1. La funcion suma() requiere 3 parametros de tipo Number para poder realizar la operacio Aritmetica
2. Se realiza la llamada de la funcion suma() con el Spread Operator, el cual distribuye los 3 PRIMEROS ELEMENTOS de "array1" 
necesarios para ejecutar la funcion
3. Como se cumple lo requerido por la funcion suma() se ejecuta el bloque de instrucciones para la que fue disenada
*/

console.log('')
console.log('** 3. SPREAD OPERATOR INVERSO - Operaciones con Funciones/ Rest Operator **')


// Es La funcion Spread Operator Inversa y basicamente: 
// Permite capturar (recibe) un número Indefinido de elementos separados por comas y los UNIFICA en un SOLO array 

// IMPORTANTE: El operador de rest es útil cuando no sabes cuántos elementos se pasarán como argumentos/parametros o cuántos elementos restantes hay en un array, ya que te permite trabajar con ellos de manera dinámica.

// ----- Ejemplo 2: Crear una Funcion y Usar el Rest Operator como Parametro de la funcion y que reciba N cantidad de elementos

// Creando una funcion que recibe N cantidad de elementos/valores/datos por Parametro y hacer un LISTADO AGRUPADO DE ESO ELEMENTOS/valores/datos RECIBIDOS - Sin definir parametro a parametro para cada elemento/dato/valor

// ...numeros es el nombre del array que AGRUPA/RECIBE la N cantidad de elementos/valores/datos
function suma2(...numeros) {
    
    // Parametro 1 :  prevValue + nextValue (como Acumulador)
    // Parametro 2 : O (la Posicion en la que inicia a Acumular)
    const resultado2 = numeros.reduce((prevValue, nextValue) => prevValue + nextValue, 0);

    console.log(resultado2);
}

// Pasandole N cantidad de Elementos a la funcion como Parametro
suma2(2, 3, 100, 53, 88, 75)
console.log('')

console.log('** 4. SPREAD OPERATOR - Operaciones con Objetos / UNIENDO OBJETOS **')

// 2. SPREAD OPERATOR - Operaciones con Objetos
// Su Objetivo es la UNION de 2 o mas Objetos en UNO resultante
// NOTA: se trabaja con CLAVE/VALOR 

// ***** NIVELES DE LA COPIA CON SPREAD OPERATOR EN OPERACIONES CON OBJETOS - Consideraciones *****
// 1. Solo de hace una COPIA POR VALOR en el Primer NIVEL del OBJETO Cuando usamos Spread Operator en Objetos 
// 2. Un Objeto que este Anidado dentro de OTRO Objeto SOLO de podra hacerse una COPIA POR REFERENCIA 
// 3. Estan dentro de SUBNIVEL todo Objeto que este Anidado dentro de OTRO Objeto
// 3. La Copias de Objeto hechas con el Spread Operator SON DEBILES XQ SOLO haran Copias Por Valor en el primer Nivel


// Ejemplo 1 - Uniendo 2 o mas Objetos Literales y un Objeto Resultante

// Objetos Literal 1 
const persona = { 
    
    nombre: 'Luis',
    apellido: 'Lopez',
    dni: 4124567,
    sexo: 'Masculino'
}

// Objetos Literal 2
const direccion = {

    calle: 'Luis',
    cuidad: 'Lopez',
    pais: 4124567, 
}

// Objetos Literal 3
const patologias= {

    alergico: 'si',
    // Objeto Anidado - Subnivel (aca ya se hace es copia por referencia)
    tipoDeAlergie: {
        polvo: true,
        lactosa: false
    }
}

// Objetos Resultante - La UNION de 2 o mas Objetos
const objResultante = {

    ...persona,
    ...direccion,
    ...patologias

}
// Mostrando el Objeto Resultante
console.log(objResultante)


// Agregando mas Elementos a Mano(Harcodeados) al objResultante

const objResultante2 = {

    ...persona,
    ...direccion,
    ...patologias,
    edad: 35
}
// Mostrando el Objeto Resultante2
console.log(objResultante2)
console.log('--------------')


// Ejemplo 2 - Verificando los Niveles y SubNiveles dentro de un Objeto 

// Objetos Literal 1 
const persona2 = {

    nombre: 'Luis',
    apellido: 'Lopez',
    dni: 4124567,
    sexo: 'Masculino'
}

// Objetos Literal 2
const direccion2 = {

    calle: 'French',
    cuidad: 'CABA',
    pais: 'Argentina',
}

const patologias2 = {

    usaLentes: 'no', 
    alergico: 'si',
    // tipoDeAlergia Objeto Anidado - Subnivel (a partir de aca ya se hace es copia por referencia)
    alergias: {
        // Esto es una Propiedad del Objeto "tipoDeAlergie" que a su vez es propiedad del Objeto "Patologias"
        polvo: true,
        lactosa: false,
        trigo: true
    }
}

const objResultante3 = {

    ...persona2,
    ...direccion2,
    ...patologias2,
    
}
// Mostrando el Objeto Resultante2
console.log('Objeto Original ALERGIAS - No debe cambiar Ninguna Propiedad en Ningu Nivel')
console.log(patologias2)
console.log('Objeto Unificado SIN modificar')
console.log(objResultante3)
console.log('--------------')

console.log(' ---- Haciendo Cambio al Objeto Resultante3 para Demostrar la COPIA X VALOR - 1er Nivel / X REFERENCI 2do Nivel ---')
console.log('')

// Objeto hecho para Demostrar la COPIA X REFENCIA Y COMO AFECTA TODO 
const patologias3 = {

    usaLentes: 'no',
    alergico: 'si',
    // tipoDeAlergia Objeto Anidado - Subnivel (a partir de aca ya se hace es copia por referencia)
    alergias: {
        // Esto es una Propiedad del Objeto "tipoDeAlergie" que a su vez es propiedad del Objeto "Patologias"
        polvo: true,
        lactosa: false,
        trigo: true
    }
}

const objResultante4 = {

    ...persona2,
    ...direccion2,
    ...patologias3,

}


//Cambios en el PRIMER NIVEL -  USo "Objeto.Clave = PropiedadAcambiar" eso Significa que hago copias/Cambios por Valor en Primer NIVEL"
//  objeto    1er Nivel  Propiedad  
objResultante4.nombre = 'Chuchin'

//Cambios en el SEGUNDO NIVEL -  Uso un "Objeto.Clave.ClaveSubnivel = PropiedadAcambiar" "eso Significa que hago copias/cambios POR Referenci en SEGUNDO NIVEL")

//  objeto    1er Nivel 2do Nivel Propiedad  
objResultante4.alergias.lactosa = true

console.log(' - Objeto Original ALERGIAS /Se Modifica 2do Nivel lo Afecto/ objResultante4.alergias.lactosa = true -')
console.log(patologias3)
console.log('')

console.log('Objeto Unificado Modificado en 1er Nivel "nombre:Chuchin" y 2do NIVEL/Subnivel "alergias.lactosa = true "')
console.log(objResultante4)
console.log('')
console.log('--------------')





