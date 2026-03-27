/*Ejercicio 1 – Números primos
Crea un programa que: muestre todos los números primos entre 1 y 50. Utiliza ciclos y
condicionales para verificar qué números cumplen la condición de ser primos.*/

/*Ejercicio 1 – Números primos
Crear un programa que: muestre todos los números primos entre 1 y 50. Utilizar ciclos y
condicionales para verificar qué números cumplen la condición de ser primos.*/

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

/* Ciclo FOR, repite el bloque de código varias veces, da un inicio, una condición y una actualización. 
++, le suma 1 a una variable ej: número = número + 1 
% (módulo)  devuelve el residuo de una división. */