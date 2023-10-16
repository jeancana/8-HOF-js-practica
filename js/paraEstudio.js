
// PRIMERA MANERA DE HACERLO ----- LA DEL VIDEO 

const personaDatos = {
    nombre: 'Naza',
    apellido: 'Canache',
    dni: 335567788,
    sexo: 'Femenino',
    alergico: true
}

Object.entries(personaDatos).forEach((parKeyValue) => {
   
    const clave = parKeyValue[0]
    const valor = parKeyValue[1]

    if (typeof valor === 'string') {

        personaDatos[clave] = valor.toUpperCase()
    }
})

console.log(personaDatos) 
console.log(Array.isArray(Object.entries(personaDatos)))
console.log('')
console.log('--------------------------------------------------')

// SEGUNDA MANERA DE HACERLO ----- LO LOGRE ENTENDER MUAJAJAJAJAJ


const personaDatos2 = {
    nombre: 'Naza',
    apellido: 'Canache',
    dni: 335567788,
    sexo: 'Femenino',
    alergico: true
}

let arrDearr = Object.entries(personaDatos2)

console.log(arrDearr)
console.log(Array.isArray(Object.entries(arrDearr)))


arrDearr.forEach((parKeyValue) => {

    const clave = parKeyValue[0]
    const valor = parKeyValue[1]

    if (typeof valor === 'string') {

        personaDatos2[clave] = valor.toUpperCase()
    }
})

console.log(personaDatos2) 