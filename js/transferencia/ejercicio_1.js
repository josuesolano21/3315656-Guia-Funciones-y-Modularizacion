/*Ejercicio 1 – Números primos
Crea un programa que: muestre todos los números primos entre 1 y 50. Utiliza ciclos y
condicionales para verificar qué números cumplen la condición de ser primos.*/

/*Ejercicio 1 – Números primos
Crear un programa que: muestre todos los números primos entre 1 y 50. Utilizar ciclos y
condicionales para verificar qué números cumplen la condición de ser primos.*/

function Primos() {
  for (let num = 1; num <= 50; num++) {
    let primo = true;

    if (num < 2) {
      primo = false;
    }

    for (let divisor = 2; divisor < num; divisor++) {
      if (num % divisor === 0) {
        primo = false;
      }
    }

    if (primo) {
      console.log(num);
    }
  }
}

Primos();
/* for principal recorre todos los números del 1 al 50. En cada vuelta
Al inicio de cada número se asume que es primo si se pone en true. Si se demuestra que no lo es, da false. Se reinicia en cada vuelta.

if (num < 2) {
  primo = false;
}   Los números 0 y 1 no son primos por definición
El for anidado prueba dividir num entre todos los números desde 2 hasta justo antes de este.

El % devuelve el residuo de una división. el % divisor === 0 significa que fue exacta*/