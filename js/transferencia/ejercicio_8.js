/*Ejercicio 8 – Control de acceso
Crea un programa que: solicite un usuario y contraseña. El programa debe permitir hasta
3 intentos; si el usuario falla en todos, mostrar un mensaje de “Acceso denegado”. Si
acierta, mostrar “Bienvenido”.*/
// Verifica si el usuario y clave son correctos
function esValido(usuario, clave) {
  return usuario === "admin" && clave === "1234";
}

// Función principal
function controlAcceso() {
  let intentos = 0;
  let acceso = false;

  while (intentos < 3 && !acceso) {
    let usuario = prompt("Usuario:");
    let clave = prompt("Contraseña:");

    if (esValido(usuario, clave)) {
      acceso = true;
      console.log("Bienvenido ");
    } else {
      console.log("Incorrecto ");
      intentos++;
    }
  }

  if (!acceso) {
    console.log("Acceso denegado ");
  }
}

// Ejecutar
controlAcceso();
```

**Salida esperada:**
```
// Si falla los 3 intentos:
Incorrecto 
Incorrecto 
Incorrecto 
Acceso denegado 

// Si acierta:
Bienvenido 