/*Diseña un algoritmo que sume los números del 1 al 100, pero interrumpa el
ciclo si encuentra un número mayor a 90 que sea par.*/

// Verifica si debe interrumpir el ciclo
function debeInterrumpir(n) {
  return n > 90 && n % 2 === 0;
}

// Muestra el resultado final
function mostrarResultado(suma, n) {
  console.log(`Ciclo interrumpido en: ${n}`);
  console.log(`Suma total: ${suma}`);
}

// Función principal
function sumarNumeros() {
  let suma = 0;

  for (let i = 1; i <= 100; i++) {
    if (debeInterrumpir(i)) {
      mostrarResultado(suma, i);
      break;
    }
    suma += i;
  }
}

// Ejecutar
sumarNumeros();
