/*Construye un algoritmo que permita registrar el ingreso de 5 estudiantes a
un salón. Si un estudiante no trae su carné, no debe ingresar y el ciclo debe continuar
con el siguiente. */
// Verifica si el estudiante tiene carné
function tieneCarné(estudiante) {
  return estudiante.carné === true;
}

// Registra el ingreso o rechaza al estudiante
function registrarIngreso(estudiante) {
  if (tieneCarné(estudiante)) {
    console.log(` ${estudiante.nombre} ingresó al salón.`);
  } else {
    console.log(` ${estudiante.nombre} no tiene carné, no puede ingresar.`);
  }
}

// Función principal: recorre los 5 estudiantes
function registrarEstudiantes() {
  let estudiantes = [
    { nombre: "Ana",     carné: true  },
    { nombre: "Luis",    carné: false },
    { nombre: "María",   carné: true  },
    { nombre: "Carlos",  carné: false },
    { nombre: "Sofía",   carné: true  }
  ];

  for (let i = 0; i < estudiantes.length; i++) {
    registrarIngreso(estudiantes[i]);
  }
}

// Ejecutar
registrarEstudiantes();
```

**Salida esperada:**
```
 Ana ingresó al salón.
 Luis no tiene carné, no puede ingresar.
 María ingresó al salón.
 Carlos no tiene carné, no puede ingresar.
 Sofía ingresó al salón.