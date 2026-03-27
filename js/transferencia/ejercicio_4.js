/*Ejercicio 4 – Promedio de notas
Crea un programa que: lea las notas de 5 estudiantes. Calcula el promedio de cada uno y
determina, mediante condicionales, si aprueba (nota ≥ 3.0) o reprueba. Usa ciclos para
ingresar los datos de manera ordenada.*/

// Calcula el promedio de las notas
function calcularPromedio(notas) {
    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
    suma += notas[i];
}
    return suma / notas.length;
}

// Verifica si aprueba
function aprueba(promedio) {
    return promedio >= 3.0;
    }

// Muestra el resultado del estudiante
function mostrarResultado(nombre, promedio) {
    let estado = aprueba(promedio) ? "Aprueba ✓" : "Reprueba ✗";
    console.log(`${nombre} - Promedio: ${promedio.toFixed(2)} - ${estado}`);
    }

// Lee las notas de un estudiante
function leerNotas(nombre) {
    let notas = [];
    for (let i = 1; i <= 3; i++) {
        let nota = parseFloat(prompt(`${nombre} - Ingresa la nota ${i}:`));
        notas.push(nota);
    }
    return notas;
    }

// Función principal
function promedioEstudiantes() {
    let estudiantes = ["Ana", "Luis", "María", "Carlos", "Sofía"];

    console.log("=== Registro de notas ===");

    for (let i = 0; i < estudiantes.length; i++) {
        let notas = leerNotas(estudiantes[i]);
        let promedio = calcularPromedio(notas);
        mostrarResultado(estudiantes[i], promedio);
    }
    }

// Ejecutar
promedioEstudiantes();
