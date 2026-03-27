/*Ejercicio 5 – Tienda de productos
Crea un programa que: simule la venta de productos. El usuario podrá registrar la compra
de varios artículos hasta que decida no comprar más. Se debe calcular el total de la
compra y aplicar un descuento del 10% si el valor supera los $100.000.*/


function venta() {
  let total = 0;
  let seguir = "si";

  while (seguir === "si") {
    let precio = Number(prompt("Precio del artículo:"));
    total = total + precio;
    seguir = prompt("¿Agregar otro artículo? (si/no)");
  }

  if (total > 100000) {
    total = total - (total * 0.10);
    console.log("Se aplicó descuento del 10%");
  }

  console.log("Total a pagar: $" + total);
}

venta();


/* total comienza en 0 y va acumulando la suma de todos los artículos.
seguir inicia en SI para que el while pueda entrar la primera vez. Si arrancara en No, el ciclo no se ejecutará.

El ciclo while repite todo lo que esté dentro mientras el usuario siga respondiendo SI. Se sabrpá cuantas vueltas dará dependiendo de cuántos artículos quiera agregar el usuario, y si el usuario responde NO, la condición deja de cumplirse y el ciclo terminará.

total = total + precio suma ese precio al total acumulado. 

Al final de cada vuelta se hará la pregunta al usuario si quiere agregar otro artículo o no, la respuesta será guardada en seguir.

Si la respuesta es SI, el while volverá a entrar, si la respuesta es NO, el ciclo se detendrá.

El if fuera del while sirve para ejecutarlo una sola vez cuando ya se registraron todos los artículos.

Si el total supera los 100.000, se calcula el 10% con total * 0.10 y se resta del total, si el total no supera los 100.000, el if no hará nada y el total quedará igual.*/
