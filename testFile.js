// Función que separa un string en un arreglo de caracteres
let split = (string) => {
    let stringSplit = []
    for (let index = 0; index < string.length; index++) {
        stringSplit.push(string[index]);
    }
    return stringSplit
}

// Función que toma un númer entero y lo convierte a número binario
let enteroABinario = (numero) => {
    let binario = []
    for (let index = 0; index < 8; index++) {
        binario.push((numero % 2));
    }
    return binario.reverse().join("")
}

