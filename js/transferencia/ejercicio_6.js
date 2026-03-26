/*Ejercicio 6 – Juego del adivinador
Crea un programa que: genere un número aleatorio entre 1 y 20. El usuario intentará
adivinarlo y el ciclo repetirá los intentos hasta que lo logre. Cada vez que falle, el
programa debe indicar si el número buscado es mayor o menor que el ingresado.*/
// Genera un número aleatorio entre 1 y 20
function generarNumero() {
  return Math.floor(Math.random() * 20) + 1;
}

// Compara el intento con el número secreto
function verificarIntento(intento, secreto) {
  if (intento === secreto) {
    return "correcto";
  } else if (intento < secreto) {
    return "mayor";
  } else {
    return "menor";
  }
}

// Muestra una pista al usuario
function mostrarPista(resultado, intento) {
  if (resultado === "mayor") {
    console.log(` ${intento} es incorrecto. El número es MAYOR.`);
  } else if (resultado === "menor") {
    console.log(` ${intento} es incorrecto. El número es MENOR.`);
  }
}

// Función principal: controla el juego
function jugarAdivinador() {
  let secreto = generarNumero();
  let intento;
  let intentos = 0;

  console.log(" ¡Adivina el número entre 1 y 20!");

  do {
    intento = parseInt(prompt("Ingresa un número:"));
    intentos++;

    let resultado = verificarIntento(intento, secreto);

    if (resultado === "correcto") {
      console.log(` ¡Correcto! Adivinaste en ${intentos} intento(s).`);
    } else {
      mostrarPista(resultado, intento);
    }

  } while (intento !== secreto);
}

// Ejecutar
jugarAdivinador();
```

**Salida esperada:**
```
 ¡Adivina el número entre 1 y 20!
 5 es incorrecto. El número es MAYOR.
 15 es incorrecto. El número es MENOR.
 10 es incorrecto. El número es MAYOR.
 ¡Correcto! Adivinaste en 4 intento(s).