/*Ejercicio 7 – Contador de pares e impares
Crea un programa que: permita al usuario ingresar 10 números. Al final, muestra cuántos
fueron pares y cuántos impares.*/
// Verifica si es par
function esPar(n) {
  return n % 2 === 0;
}

// Muestra el resultado
function mostrarResultado(pares, impares) {
  console.log("Pares: " + pares);
  console.log("Impares: " + impares);
}

// Función principal
function contarNumeros() {
  let pares = 0;
  let impares = 0;

  for (let i = 1; i <= 10; i++) {
    let n = parseInt(prompt("Ingresa el número " + i + ":"));

    if (esPar(n)) {
      pares++;
    } else {
      impares++;
    }
  }

  mostrarResultado(pares, impares);
}

// Ejecutar
contarNumeros();
```

**Salida esperada:**
```
Pares: 5
Impares: 5