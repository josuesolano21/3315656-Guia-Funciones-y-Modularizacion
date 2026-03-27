/*Crea un algoritmo que lea el nombre y la edad de 5 personas. Solo mostrará
en pantalla aquellas personas que tengan 18 años o más.*/


// Verifica si es mayor de edad
function esMayorDeEdad(persona) {
    return persona.edad >= 18;
}

// Muestra la persona en pantalla
function mostrarPersona(persona) {
    console.log(`Nombre: ${persona.nombre} - Edad: ${persona.edad}`);
}

// Función principal
function filtrarPersonas() {
    let personas = [
        { nombre: "Ana",     edad: 22 },
        { nombre: "Luis",    edad: 15 },
        { nombre: "María",   edad: 18 },
        { nombre: "Carlos",  edad: 14 },
        { nombre: "Sofía",   edad: 25 }
];

    for (let i = 0; i < personas.length; i++) {
        if (esMayorDeEdad(personas[i])) {
        mostrarPersona(personas[i]);
        }
    }
    }

// Ejecutar
filtrarPersonas();
