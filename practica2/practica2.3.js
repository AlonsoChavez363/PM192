const personas = [
    { nombre: "Ana", edad: 22 },
    { nombre: "Luis", edad: 35 },
    { nombre: "María", edad: 28 }
];

//Buscar persona por nmbre
const busqueda = personas.find(persona => persona.nombre === "Luis");
console.log("Persona encontrada:", busqueda);

//Imprimir el nombre de cada persona con edad
personas.forEach(persona => {
    console.log(`${persona.nombre} tiene ${persona.edad} años.`);
});

//Sumar todas las edades
const totalEdad = personas.reduce((total, persona) => total + persona.edad, 0);
console.log("Suma total de edades:", totalEdad);
