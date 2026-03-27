/*Ejercicio 3 – Cajero automático
Crea un programa que: simule un cajero automático. El usuario inicia con un saldo
definido en una variable constante. Podrá retirar dinero varias veces mientras tenga
fondos suficientes. Si intenta retirar más de lo que tiene, debe aparecer un mensaje de
error y no permitir la transacción.*/

// Saldo inicial constante
const SALDO_INICIAL = 500000;

// Verifica si hay saldo suficiente
function tieneSaldo(saldo, monto) {
    return monto <= saldo;
}

// Muestra el saldo actual
function mostrarSaldo(saldo) {
    console.log(`Saldo disponible: $${saldo}`);
}

    // Procesa el retiro
    function procesarRetiro(saldo, monto) {
    if (monto <= 0) {
        console.log("El monto debe ser mayor a cero.");
        return saldo;
    }
    if (tieneSaldo(saldo, monto)) {
        saldo -= monto;
        console.log(`Retiro exitoso: $${monto}`);
        mostrarSaldo(saldo);
    } else {
        console.log(`Saldo insuficiente. No se puede retirar $${monto}`);
        mostrarSaldo(saldo);
    }
    return saldo;
    }

// Función principal
function cajeroAutomatico() {
    let saldo = SALDO_INICIAL;

    console.log("Bienvenido al cajero automático.");
    mostrarSaldo(saldo);

    let continuar = true;

    while (continuar) {
        let monto = parseInt(prompt("¿Cuánto desea retirar? (0 para salir):"));

        if (monto === 0) {
        console.log("Gracias por usar el cajero. ¡Hasta luego!");
        continuar = false;
        } else {
        saldo = procesarRetiro(saldo, monto);

        if (saldo === 0) {
            console.log("Su saldo es cero. No puede realizar más retiros.");
            continuar = false;
        }
        }
    }
    }

// Ejecutar
cajeroAutomatico();
