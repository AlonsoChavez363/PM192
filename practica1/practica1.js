let nombre = "Alonso";
const edad = 21;

nombre = "Ana Maria";

const saludo = "Hola" + nombre + " .Tienes" + edad + " años.";

console.log(saludo);

//pasar una funcion tradicional a una arrow
const cuadrado = (numero) => numero * numero;
console.log(cuadrado(2)); 