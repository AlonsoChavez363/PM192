const persona = {
    nombre: "Alonso",
    edad: 21,
    direccion: {
        ciudad: "QRO",
        pais: "México"
    }
};

//Destructuiracion 
const { nombre, edad, direccion: { ciudad } } = persona;

//Mensaje 
console.log(`Me llamo ${nombre}, tengo ${edad} años y vivo en ${ciudad}.`);
