/*Realiza un algoritmo que pida al usuario ingresar 10 números y muestre
únicamente los que sean mayores que 50. */

function resultado() {
  for (let i = 1; i <= 10; i++) {
    let numero = Number(prompt(`Ingresa el número ${i} de 10:`));

    if (numero > 50) {
      console.log("Mayor que 50:", numero);
    }
  }
}

resultado();

/* Resultado es el numero mayor o menor que va a imprimir el sistema  

ciclo for para repetir el codigo varias veces

let i = 1  d43q una variable contadora que iniciará desde 1, asi que mientras i sea menor o igual a 10, el código se seguirá repitiendo y al final e cada vuelta, se le sumaá 1 a i. Da un total de 10 vueltas el código

Se usa comilla invertida para meter la variable ${i} dentro e el, imprimiendo un mensaje por vuelta.

if evalúa una condició, si el número que el usuario ingresó es mayor que 50, ejecutará lo que está dentro de if.

Si el número es 50 o menos, el if no hace nada y pasa al siguiente. */
