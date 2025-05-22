const personas = [
    { nombre: "Ana", edad: 22 },
    { nombre: "Luis", edad: 35 },
    { nombre: "María", edad: 28 }
];

//Buscar persona por nmbre
const busqueda = personas.find(persona => persona.nombre === "Luis");
console.log("Persona encontrada:", busqueda);


