let nombre = "Alonso";
const edad = 21;

nombre = "Ana Maria";

const saludo = "Hola" + nombre + " .Tienes" + edad + " años.";

console.log(saludo);

//pasar una funcion tradicional a una arrow
const cuadrado = (numero) => numero * numero;
console.log(cuadrado(2)); 

//Crear una arrow function llamada saludopersonalizado que reciba nombre y edad y retorne una cadena
const saludoPersonalizado = (nombre, edad) => `Hola, me llamo ${nombre} y tengo ${edad} años.`;
console.log(saludoPersonalizado("Alonso", 21));
