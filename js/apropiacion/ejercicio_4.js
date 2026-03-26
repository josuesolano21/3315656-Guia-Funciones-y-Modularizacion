/*Diseña un Algoritmo que simule un cajero automático: repite el proceso de
retirar dinero hasta que el saldo sea insuficiente. */


function cajeroAu() {
  let saldo = Number(prompt("¿Cuál es tu saldo inicial?"));

  while (saldo > 0) {
    console.log("Saldo actual:", saldo);

    let retiro = Number(prompt("¿Cuánto deseas retirar?"));

    if (retiro > saldo) {
      console.log("El saldo es insuficiente. No se podrá retirar el dinero.");
      break;
    }

    saldo = saldo - retiro;
    console.log("Retiro exitoso. Saldo restante: ", saldo);
  }

  console.log("Sesión finalizada. Saldo final: ", saldo);
}

/* se utiliza un ciclo while para repetir todo lo que está adentro mientras la condición sea verdadera. La condición es que el saldo sea mayor que 0.

A diferencia del for que utilicé en el ejercicio #3, este while no dará a conocer el número de vueltas que va dar, todo depende de la cantidad de dinero que el ususario va a retirar cada que haga uso del cajero. 

Al inicio de cada vuelta se muestra el saldo actual para que el usuario sepa cuánto tiene disponible, luego se pedirá  el monto a retirar con otro prompt, y se guarda en la variable de retiro. Antes de descontar el dinero al usuario, se verifica si el retiro que el usuario está realizano es mayor al monto que hay en el cajero
si no alcanza, se usa break que rompe el ciclo inmediatamente y sale del while sin importar si la condición sigue siendo verdadera.

Si el retiro sí alcanza con el dinero que está en el cajero, este actualiza la variable saldo restándole el monto retirado y finalmente muestra el saldo restante.*/


