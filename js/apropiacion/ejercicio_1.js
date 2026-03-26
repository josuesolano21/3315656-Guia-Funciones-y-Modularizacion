/*Diseña un Algoritmo que muestre los números del 1 al 20, pero solo imprima
los múltiplos de 3. */ 
// Verifica si es múltiplo de 3
function esMúltiplo(n) {
  return n % 3 === 0;
}

// Muestra los múltiplos del 1 al 20
function mostrarMúltiplos() {
  for (let i = 1; i <= 20; i++) {
    if (esMúltiplo(i)) {
      console.log(i);
    }
  }
}

// Ejecutar
mostrarMúltiplos();
```

**Salida esperada:**
```
3
6
9
12
15
18