const prompt = require("prompt-sync")({ sigint: true });

// Loop de pares

let loopDePares = (num) => {
    for (let index = 0; index <= 100; index++) {
        console.log(`Loop # ${index}`);
        if ((index + num)%2 === 0) {
            console.log(`El número ${index + num} es par`);
        }       
    }
}

// loopDePares(3)

// Loop de impares con palabra

let loopDeImpares = (numero, palabra) => {
    for (let index = 0; index <= 100; index++) {
        console.log(`Loop # ${index}`);
        if ((index + numero)%2 !== 0) {
            console.log(palabra);
        }
    }
}

// loopDeImpares(4, "Excelente")

// Sumatoria

let sumatoria = (numero) => {
    let sumaTotal = 0
    for (let index = 0; index <= numero; index++) {
        sumaTotal += index
    }
    return sumaTotal
}

// console.log(sumatoria(8));

// Nuevo arreglo

let nuevoArreglo = (numero) => {
    let arregloNumeros = []
    for (let index = 1; index <= numero; index++) {
        arregloNumeros.push(index)
    }
    return arregloNumeros
}

// console.log(nuevoArreglo(9));

// Similar String.plit()

let split = (string) => {
    let stringSplit = []
    for (let index = 0; index < string.length; index++) {
        stringSplit.push(string[index]);
    }
    return stringSplit
}

// console.log(split("HolaHola"));

// Manejando dos arreglos

let arrayHandler = (arreglo1, arreglo2) => {
    for (let index = 0; index < arreglo1.length; index++) {
        console.log(`Soy ${arreglo1[index]} y yo soy ${arreglo2[index]}`);
    }
}

// arrayHandler([1,2,3,4], ["h","o","l","a"])

// Palíndromo

let palindromo = (palabra) => {
    let arregloPalabra = split(palabra)
    let arregloInvertido = []
    for (let index = palabra.length - 1; index >= 0; index--) {
        arregloInvertido.push(palabra[index]);
    }
    console.log(arregloPalabra)
    console.log(arregloInvertido)
    let indicador = true
    for (let i = 0; i < arregloPalabra.length; i++) {
        if (arregloPalabra[i] != arregloInvertido[i] ) {
            indicador = false
        } 
    }
    return indicador
}

console.log(palindromo("enrique"));