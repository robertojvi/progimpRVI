// EJERCICIO 1

const autos = [
    {
        marca: 'Toyota',
        modelo: 2022,
        color: 'rojo'
    },
    {
        marca: 'Renault',
        modelo: 2015,
        color: 'gris'
    },
    {
        marca: 'Peugeot',
        modelo: 2017,
        color: 'rojo'
    },
    {
        marca: 'Fiat',
        modelo: 2021,
        color: 'negro'
    }
]

// Crear una función que reciba el array por parametro y retorne un nuevo array con los autos cuyo modelo sea mayor o igual a 2020.

let autosDesde2020 = (arreglo) => {
    let autos2020 = []
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i].modelo >= 2020) {
            autos2020.push(arreglo[i])
        }
    }
    return autos2020
}

console.log(autosDesde2020(autos))



// EJERCICIO 2

// Dado el siguiente array de objetos ordenarlo de forma descendente en base a la notaPromedio

let estudiantes = [
    {
        nombre: "juan",
        activo: true,
        notaPromedio: 5
    },
    {
        nombre: "maria",
        activo: false,
        notaPromedio: 3
    },
    {
        nombre: "florencia",
        activo: true,
        notaPromedio: 9
    },
    {
        nombre: "carlos",
        activo: false,
        notaPromedio: 8
    },
    {
        nombre: "jose",
        activo: true,
        notaPromedio: 6
    },
]


let ordenarDescendente = (array) => {

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length -1 ; j++) {
            if (array[j].notaPromedio < array[j+1].notaPromedio){
                let aux = array[j];
                array[j] = array[j+1];
                array[j+1] = aux;
            }
        }
    }
}

ordenarDescendente(estudiantes);

console.log(estudiantes);

// EJERCICIO 3


let matrix = [
    [1, 4, 7, 4],
    [5, 7, 6, 2],
    [6, 2, 3, 3],
    [2, 6, 8, 1],
]


// PARTE 1
// Crear una función que reciba por parámetros la matriz y la posición de una columna determinada.
// La función debe retornar un arreglo con todos los elementos  de esa columna.


let columna = (matriz, columna) => {

    let nuevaMatriz = []
    for (let i = 0; i < matriz.length; i++) {
        nuevaMatriz.push(matriz[i][columna])
    }
    return nuevaMatriz
}

console.log(columna(matrix, 2))

// PARTE 2

// Crear una función que reciba por parámetro la matriz y cambie todos los elementos impares de la matriz por un número 0 (cero)

let cambiarImpares = (matriz) => {

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] % 2 !== 0) {
                matriz[i][j] = 0
            }
        }
    }
    return matriz
}

console.table(cambiarImpares(matrix))

