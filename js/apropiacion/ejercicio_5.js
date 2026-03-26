/*Elabora algoritmo que represente una competencia de atletismo con 8
corredores. Cada corredor da 4 vueltas, pero si alguno se cansa antes de terminar,
se detiene y el ciclo continúa con los demás.*/


function competencia() {
  for (let corredor = 1; corredor <= 8; corredor++) {
    console.log(`Corredor ${corredor}`);

    for (let vuelta = 1; vuelta <= 4; vuelta++) {
      let resistencia = prompt(
        `Corredor ${corredor}, vuelta ${vuelta}: Está cansado? (si/no)`
      );

      if (resistencia === "si") {
        console.log(`Corredor ${corredor} se retiró en la vuelta ${vuelta}.`);
        break;
      }

      console.log(`Corredor ${corredor} completó la vuelta completa ${vuelta}.`);
    }
  }
  console.log("Competencia finalizada.");
}
competencia();

/* El let comienza con el corredor 1, corredor es menor o igual a 8 (el for va a repetirse a no ser que no pase del corredor 8) y después de cada corredor, pasará al siguiente corredor.
Todo lo que está adentro de este for se ejecuta 8 veces, una por cada corredor.

Usa ${corredor} dentro de las comillas invertidas para mostrar el número actual del corredor (1, 2, 3, 4, 5, 6 , 7, 8).

for anidado dentro del for de los corredores. Se reinicia desde vuelta 1 por cada corredor nuevo. let vuelta = inicia desde la vuelta 1, vuelta se repite hasta completar 4 y se le suma 1 a la vuelta por cada repetición.

se ´puso un prompt que va a  preguntar en cada vuelta si el corredor ya va cansado, se muestra el número del corredor y la vuelta actual.

un if en el cual si el usuario ingresa que el corredor si va cansado y se retira de la vuelta, automaticamente termina con un break que rompe con el for anidado, si el corredor no ingresa que si está cansadito entonces se seguirá normal con sus respectivas vueltas.

Si el corredor no se cansó, se confirma que completó esa vuelta. Solo se ejecuta cuando el if de arriba no se cumplió
