
// *********** HOF - METODOS DE BUSQUEDA Y TRANSFORMACION - para Operar Sobre Arrays *************** 

// HOF Nativas de JavaScript - Metodos para Operar Sobre Arrays Usando una funcion como Parametro 
// Tiene al ARRAY como Primer Parametro 
// RECIBEN  SIEMPRE la Funcion CREADA como segundo parametro
// las HOF Nativas de JavaScript fueron pensadas para RESOLVER problemas recurrentes con los arrays

console.log('** 1. HOF - forEach() **')
//---- ** 1. HOF - forEach **----

// Creo un array de Nros - Para Usarlo en todos los ejemplos 
const arrayNros = [1, 2, 3, 4, 5]

// Ejemplo Nro.1 
//Creo una funcion para mostrar los elementos del array - se la paso como parametro al forEach
function mostrarElementos(arrayNros) {
    console.log(arrayNros)
}
//Usamos la HOF - forEach y pasamos como parametro la 'funcion mostrarElementos'
arrayNros.forEach(mostrarElementos)
console.log('')

// Ejemplo Nro.2 
// Mejando la Sintaxis, CREO la funcion Anomina directamente en el forEach 
arrayNros.forEach(function(arrayNros) {
    // Aca duplico los valores de arrayNros y lo consologueo
    console.log(arrayNros * 2)
})
console.log('')
 
// Ejemplo Nro.3
// Mejando la Sintaxis y Haciendo un Triplicador - Arrow function directamente en el forEach 
arrayNros.forEach((arrayNros) => {
    console.log(arrayNros * 3)
})
console.log('')

// Ejemplo Nro.4 
// Mejando la Sintaxis y Haciendo un Cuatriplicador - Arrow function en una sola linea en el forEach - se eliminan los corchetes
arrayNros.forEach((arrayNros) => console.log(arrayNros * 4))

//Nota: es posible hacerlo tan simple que es una funcion Anomina que recibe un solo parametro/ de tener mas de una debo declarar la funcion como tradicionalmente se hace y hacerla afuera en una linea de codigo aparte

console.log('** 2. HOF - map() **') 
//---- ** 2. HOF - map() **----
// El método map() crea un nuevo array con todos los elementos del original transformados según las operaciones de la función enviada por parámetro.

// Ejemplo Nro.1
//Creando un arrayNros que multiplique x2 cada elemento
const multiplicaPorDos = arrayNros.map((x) => x * 2) 
// Consologueando al nuevo array
console.log(multiplicaPorDos)

console.log('')
// Ejemplo Nro.2

// Creo un array de Nombres para ejecutar el ejemplo 2 
const nombres = ['Michell', 'katherine', 'Silvana', 'Marco']

//Creando un array que indique la longitud de cada elemento contenido en el 
const longitud = nombres.map( (nombre)=>nombre.length)
// Consologueando al nuevo array
console.log(longitud)

console.log('')
// Ejemplo Nro.3

// Creo array de Objetos "carrito" para ejecutar el ejemplo 3 
const carrito = [
    { producto: 'zapato', precio: 500 },
    { producto: 'sombrero', precio: 800 },
    { producto: 'camisa', precio: 200},
    { producto: 'pantalon', precio: 300 },
    { producto: 'correa', precio: 150 }
]

// Creando un array que me permita saber el Precio+Iva de cada uno de los productos(elementos) 
const precioMasIva = carrito.map((arrayCarrito) => arrayCarrito.precio * 1.21)
// Consologueando al nuevo array
console.log(precioMasIva)
console.log('')

// Creando una Array solo para ver los Precios sin IVA - haciendolo solo en una sola linea 
const precios = carrito.map((arrayCarrito) => console.log(arrayCarrito.precio))
console.log('')

// Creando una Array solo para ver los productos - haciendolo solo en una sola linea 
const productos = carrito.map((arrayCarrito) => console.log(arrayCarrito.producto))
console.log('')

// Creando una Array solo para ver los productos y su precio - haciendolo solo en una sola linea 
const mostrarTodo = carrito.map((arrayCarrito) => console.log(`Producto: ${arrayCarrito.producto} - Precio: ${arrayCarrito.precio}`))
console.log('')

console.log('** 3. HOF - find() **')
//---- ** 3. HOF - find() **----
// El método find() recibe una función de comparación/Asignacion por parámetro, Captura el elemento que se está Evaluando y retorna true o false según la comparación ejecutada. El método retorna SOLAMENTE el PRIMER elemento que cumpla con esa condición.

// Ejemplo Nro.1

// Creamos un Array de Objetos 
const cursos = [
    { nombre: 'Javascript', precio: 15000 },
    { nombre: 'ReactJS', precio: 22000 },
]

// Creo la constante buscoCurso y le asigno la operacion a realizar con el ".find"
const buscoCurso = cursos.find((buscandoElemento) => buscandoElemento.nombre === "ReactJS")
const buscoCurso2 = cursos.find((buscandoElemento) => buscandoElemento.nombre === "Chino")

console.log(buscoCurso) 
console.log(buscoCurso2)

// Nota: el find() retorna SOLAMENTE el PRIMER elemento del array que cumpla con la condición enviada, de ahí que podemos almacenarlo en una variable o usarlo de referencia para otro proceso. Si no hay ninguna coincidencia en el array, el método find retorna undefined


// Ejemplo Nro.2

// Creo un array de meses para el ejemplo
const meses = ['Enero', 'Febreo', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

// Creo la constante buscoCurso y le asigno la operacion a realizar con el ".find"
const buscoMes= meses.find((buscandoElemento) => buscandoElemento === 'Enero')
const buscoMes2 = meses.find((buscandoElemento) => buscandoElemento === 'Septubre')

console.log(buscoMes)
console.log(buscoMes2)

console.log('')
console.log('** 4. HOF - findIdex() **')
//---- ** 4. HOF - findIndex() **----
// Hace los mismo que el find(), lo unica diferencia es que RETORNA el INDICE/POSICION del elemento que estamos buscando 

// Nota: SINO consigue la posicion del elemento te retorna un -1 

// Ejemplo Nro.1

// Creo un array de meses para el ejemplo
const meses2 = ['Enero', 'Febreo', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

// Creo la constante buscoCurso y le asigno la operacion a realizar con el ".find"
const buscoIndice = meses.findIndex( buscandoElemento => buscandoElemento === 'Marzo')
const buscoIndice2  = meses.findIndex( buscandoElemento  => buscandoElemento === 'Septubre')

console.log(buscoIndice)
console.log(buscoIndice2)

console.log('')
console.log('** 5. HOF - reduce() **')
//---- ** 5. HOF - reduce() **----
// El método reduce() nos permite obtener un único valor tras iterar sobre el array. Funciona como un método que resume el array a un único valor de retorno. 

// Nota 

/* 
 ---- IMPORTANTE - el método reduce recibe dos parámetro; 
- El Primero: Recibe un parámetro que funciona como acumulador, y el elemento del array que iteramos
- El Segundo: es el valor inicial del acumulador, desde que posicion quiero que empiece a acumular la HOF reduce().  
*/

// Ejemplo 1 - Usamos el Objetos "carrito" (ya creado) para ejecutar el ejemplo

// Inicio la variable que acumula el resultado en Cero
let acumulador = 0 

// Aca creo los 2 parametros que van dentro de la funcion que se recibir como parametro
// 1. El acumulador va guardando el resuelta de la iteracion
// 2. el otro parametro me indica desde que posicion del array de Objetos "Carrito" empiezo a acumular los precios 

let resultado = carrito.reduce((acumulador, arrayCarrito) => acumulador + arrayCarrito.precio, 0)
// Muestro la Suma de todos los Precios Incluidos en el array de objetos "Carrito"
console.log(resultado)

// Ejemplo 2 - haciendo funcionar el .reduce() con Datos de tipo String, como no tiene Numbers que acumular dejo 2do Parametro Vacio
let resultado2 = meses.reduce((acumulador, arrayMeses) => acumulador + arrayMeses,)

// Muestro el resultado del reduce() de Datos de Tipo String
console.log(resultado2)

console.log('')
console.log('** 6. HOF - filter() **')
//---- ** 6. HOF - filter() **----

/* El método filter() recibe, al igual que find(), una función comparadora por parámetro, y retorna un NUEVO ARRAY con TODOS los elementos que cumplan esa condición. 
Si no hay coincidencias, retornará un array vacío. */

// Ejemplo Nro.1

const cursos2 = [
    { nombre: 'Javascript', precio: 15000 },
    { nombre: 'ReactJS', precio: 22000 },
    { nombre: 'AngularJS', precio: 25000 },
    { nombre: 'Desarrollo Web', precio: 16000 }
]

// Aca le estoy pidiendo que entregue en un NUEVO ARRAY todos los elementos en donde la propiedad nombre tengas Strings que contenga los caracteres '"JS" 
const newArrayCursos = cursos2.filter( el => el.nombre.includes('JS'))

// Aca le pido que entregue en un NUEVO ARRAY todos los elementos donde el precio sea menores a 20.000 
const newArrayCursos2 = cursos2.filter( el => el.precio < 20000)

// Aca le pido que entregue en un NUEVO ARRAY todos los elementos donde el precio sea menores a 13.000 
const newArrayCursos3 = cursos2.filter( el => el.precio < 13000)

console.log(newArrayCursos)
/* [
    {nombre: 'ReactJS', precio: 22000},
    {nombre: 'Angular', precio: 22000}
] */

console.log(newArrayCursos2) 
/* 
 { nombre: 'Javascript', precio: 15000 },
{ nombre: 'Desarrollo Web', precio: 16000 }  
*/

console.log(newArrayCursos3) // []

console.log('')
// Ejemplo Nro.2 

// Aca le pido que entregue en un NUEVO ARRAY todos los elementos donde el precio sea mayor a 400 
let newArrayCarrito = carrito.filter(item => item.precio > 400)
 
console.log(newArrayCarrito) 

console.log('')

// Ejemplo Nro.2  - Metodo filter() Invertido 

// Aca le pido que entregue en un NUEVO ARRAY todos los elementos que sean distintos al String 'zapato'

// Nota: a esto se le conoce como METODO filter() a la inversa y es USADO para Eliminar un Elemento de Array 
let newArrayCarrito2 = carrito.filter( item => item.producto !== 'zapato')

// consologueando el Nuevo Array que CONTIENE los elementos distintos a 'zapato'
console.log(newArrayCarrito2) 

console.log('')
console.log('** 7. HOF - every() **')
//---- ** 7. HOF - every() **----

// Aca le pido que entregue en un NUEVO ARRAY todos los elementos donde el precio sea mayor a 400 
// Retorna un booleano (true/false )SI alguno de los elementos evaluados no cumple la condicion devuelve false
// tiene que cumplir la condiciones TODOS/every los elementos evaluados para que de true

let newArrayCarrito3 = carrito.every(item => item.precio > 400)
console.log(newArrayCarrito3) // Retorna False xq existen elementos Menores a 400

let newArrayCarrito4 = carrito.every(item => item.precio < 1000)
console.log(newArrayCarrito4) // Retorna true xq TODOS elementos Menores a 1000

