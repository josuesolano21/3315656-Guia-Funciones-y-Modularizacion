/*Construye un algoritmo que simule la venta de 15 boletos de cine. Si el
comprador es menor de edad y la película es para adultos, se debe rechazar la venta
y continuar con el siguiente comprador.*/

// Verifica si se puede vender el boleto
function puedeComprar(comprador) {
  if (comprador.peliculaAdultos && comprador.edad < 18) {
    return false;
  }
  return true;
}

// Registra la venta o el rechazo
function procesarVenta(comprador, numero) {
  if (puedeComprar(comprador)) {
    console.log(`Comprador ${numero} - ${comprador.nombre}: Boleto vendido.`);
  } else {
    console.log(`Comprador ${numero} - ${comprador.nombre}: Rechazado, es menor de edad.`);
  }
}

// Función principal
function simularVentas() {
  let compradores = [
    { nombre: "Ana",     edad: 22, peliculaAdultos: true  },
    { nombre: "Luis",    edad: 15, peliculaAdultos: true  },
    { nombre: "María",   edad: 17, peliculaAdultos: false },
    { nombre: "Carlos",  edad: 14, peliculaAdultos: true  },
    { nombre: "Sofía",   edad: 25, peliculaAdultos: true  },
    { nombre: "Pedro",   edad: 16, peliculaAdultos: false },
    { nombre: "Laura",   edad: 30, peliculaAdultos: true  },
    { nombre: "Diego",   edad: 13, peliculaAdultos: true  },
    { nombre: "Valentina", edad: 19, peliculaAdultos: true },
    { nombre: "Camila",  edad: 15, peliculaAdultos: false },
    { nombre: "Andrés",  edad: 28, peliculaAdultos: true  },
    { nombre: "Sara",    edad: 12, peliculaAdultos: true  },
    { nombre: "Miguel",  edad: 21, peliculaAdultos: false },
    { nombre: "Paula",   edad: 17, peliculaAdultos: true  },
    { nombre: "Tomás",   edad: 35, peliculaAdultos: true  }
  ];

  for (let i = 0; i < compradores.length; i++) {
    procesarVenta(compradores[i], i + 1);
  }
}

// Ejecutar
simularVentas();
