const prompt = require("prompt-sync")({ sigint: true });

function pulgadasACentimetros() {
  // Solicitar al usuario la cantidad de pulgadas mediante prompt
const pulgadas = Number(prompt("Ingresa la cantidad de pulgadas:"));

  // Verificar si el valor ingresado es un número válido
  return pulgadas * 2.54;
}

// Llamar a la función para realizar la conversión
console.log(pulgadasACentimetros());



function convertirAURL() {
    // Añadir "http://www." antes del nombre y ".com" después
    const nombre = prompt("ingrese un nombre:")
    const url = `http://www.${nombre}.com`;
    return url;
  }

  console.log(convertirAURL());



  function admiracion() {
    const str = prompt("ingrese un texto:")
    const strAdmiracion = `${str}!`;
    return strAdmiracion;
  }

  console.log(admiracion());

  function edadPerro(){
    const edadHumano = Number(prompt("Ingresa tu edad:"))
    const edadDog = edadHumano * 7
    return edadDog
  }

  console.log(edadPerro());

  function valorHora(){
    const salario = Number(prompt("ingresa tu salario mensual:"))
    const salarioHora = salario / 40
    return salarioHora
  }

  console.log(valorHora());


  function imc(){
    const peso = Number(prompt("ingresa tu peso en kg:"))
    const estatura = Number(prompt("ingresa tu estatura en m:"))
    const indiceMasaCorporal = peso / (estatura * estatura)
    return indiceMasaCorporal
  }

  console.log(imc());

  const masaCorporal = () => {
    const peso = Number(prompt("Ingresa tu peso en kg:"));
    const estatura = Number(prompt("Ingresa tu estatura en m:"));
    const indiceMasaCorporala = peso / (estatura * estatura);
    return indiceMasaCorporala;
  };

  const resultadoIMC = masaCorporal();
console.log(`Tu índice de masa corporal (IMC) es ${resultadoIMC}`);