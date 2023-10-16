// ***** METODOS ESTATICOS DE LA CLASE_OBJECT/OBJETO-GLOBAL/OBJETC DE JAVASCRIPT ****

// ******--------- Metodo Nro1 - Object.keys() --------------*****
// El Metodo recibe un Objeto y devuelve un listado/Array de strings con cada una de las "key/Claves" del objeto

const personaPrueba = {
    
    //key  : Value
    nombre: 'Michell',
    // Clave: Valor
    apellido: 'Lopez',
    dni: 4124567,
    sexo: 'Masculino',
    // Clave: Valor
    alergico: true
    // Me hace un parseo de la key "5"    
}

// Usando el Metodo de la Clase Object Object.Keys() -  todo lo que No sea String lo Parsea a Strings y me devuelve un Array de String 
console.log(Object.keys(personaPrueba))

// NOTA: Su FUNCION PRINCIPAL para lo que mas se uso es para allar longitud del objeto
// Consiguiendo la Longitud del Objeto a traves de keys/Claves  
console.log(Object.keys(personaPrueba).length)

console.log(' -------------------')

// ****----- Metodo Nro2 - Object.values() ---------****
// El Metodo recibe un Objeto y devuelve un listado/Array con cada una de las "values/valores" del objeto y conserva el tipo de Dato de cada uno de los valores/values   
console.log(Object.values(personaPrueba))
    
// Consiguiendo la Longitud del Objeto a traves de Values/Valores  
console.log(Object.values(personaPrueba).length)

// Otro Ejemplo mas claro - para usar el Object.values(): 

const salarios = {

    enero: 1000,
    febrero: 2000,
    marzo: 3000
    
}

// 1. Usamos el Object.values(salarios) para obtener el array con todos los values/valores contenidos en el objeto, en este caso es una Array de salarios
// 2. Usamos la HOF - Reduce para obtener el total de los salario cobrados los 3 primeros meses del 2023
console.log(Object.values(salarios).reduce((prevValue, nextValue) => prevValue + nextValue, 0));

console.log(' -------------------')

// ****----- Metodo Nro3 - Object.entries() ---------****
//  El Metodo recibe un Objeto y devuelve un "Array de Arrays", Es un Array donde cada posicion a su vez es un array (un Array lleno de sub Arrays)
// En otras Palabras: toma cada uno de los pares "key/value" que tenga el objeto y los convierte en arrays que a su vez estan contenidos dentro otro Array -----> Osea un array compuesto de arrays/ un Array que tiene SubArrays

// Los SUBARRAY CONTIENE en la posicion 0 la key/Clave y en la posicion 1 el Value/Valor

//Caso de Utilidad del Object.entries() : Aca voy a transformar/parsear todo los valore de tipo String en que esten detron del array de array en Mayusculas

const personaPrueba2 = {
    nombre: 'Naza',
    apellido: 'Canache',
    dni: 335567788,
    sexo: 'Femenino',
    alergico: true
}

// 1. Aca convierto el Objeto en un Array de arrays usando el --> Object.entries(personaPrueba2)
//2. Aca recorro el array de array con un forEach y creo la funcion que convierte Mayuscula todos los valores que sean string
Object.entries(personaPrueba2).forEach((parKeyValue) => {
    
    // Asigno variables el Par Clave/Valor
    const clave = parKeyValue[0]
    const valor = parKeyValue[1]

    // SI el tipo de Dato de valor es Igual a un string entonces: deseo Asignarle el propio valor pero en Mayuscula
    if (typeof valor === 'string') {
        
        // Al arrayDeArrays en Posicion0 "clave = parKeyValue[0]",  Asignale el PROPIO/NOCAMBIA "valor = parKeyValue[1]" pero en Mayuscula
        personaPrueba2[clave] = valor.toUpperCase()
    }
})

// Mostrando el Array de Arrays con los datos de tipo String pasados a Mayuscula
console.log(personaPrueba2)
// Verificando que SI es un array 
console.log(Array.isArray(Object.entries(personaPrueba2)))


// ****----- Metodo Nro4 - Object.fromEntries() / el inverso de Object.entries()  ---------****

//  El Metodo recibe un Array de Arrays y lo convierte en un objeto 

// Esto es un Array de Arrays que convertire en objeto
const personaPrueba3 = [
    ['nombre', 'Hector'],
    ['apellido', 'Canache'],
    ['dni', 6871653],
    ['sexo', 'Masculino'],
    ['alergico', true]
]

// Mostrando el nuevo objeto creado 
console.log(Object.fromEntries(personaPrueba3))
// Verificando que NO es un array 
console.log(Array.isArray(Object.fromEntries(personaPrueba3)))

console.log(' -------------------')

// ****----- Metodo Nro5 - Object.assing()  ---------****

// El Metodo recibe un Objeto y lo Clona
// Sirve para clonar Objetos, PERO realizar copias/clonar muy debiles (ya en el subnivel SOLO copias por referencia) 

//El Metodo .fromEntries() recibe 2 paramentros:
// 1. primer paramatro es para indicar en que variable voy a colocar el objeto clonado
// 2. Segundo parametro indica el objero que voy a clonar 

const personaPrueba4 = {
    nombre: 'Michell',
    apellido: 'Canache',
    dni: 16368662,
    sexo: 'Masculino',
    // Objeto Anidado dentro de otro Objeto 
    tipoDeAlergie: {
        polvo: true,
        lactosa: false
    }

}

// el objeto vacio donde voy a clonar
const personaClonada = {} 

// Uso el metodo assign para clonar/copiar
Object.assign(personaClonada, personaPrueba4)

console.log(personaClonada)
console.log(personaPrueba4)

// NOTA: 
// 1. Esta clonacion solo permite Clonar Objetos Simples
// 2. Solo peromite copia Datos Primitivos por Valor en el primer NIVEL 
// 3. NO sirve para Objetos Anidados, a partit de Nivel 2 / subnivel  Hace un copia por referencia