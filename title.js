const idiomas = [
  "Ta Te Ti",
  "Tres en Línea",
  "Ceros y Cruces",
  "Tres en Raya",
  "Cerito Cruz",
  "Michi",
  "Cuadritos",
  "Juego del Gato",
  "Gato",
  "Totito",
  "Triqui Traka",
  "Equis Cero",
  "La vieja",
];

let headerText = document.getElementById("headerText");

function startLoop() {
  setTimeout(function () {
    let actualText = headerText.innerText;

    let randomName = seleccionaNombre();

    if (actualText == randomName) {
      randomName = seleccionaNombre();
    }

    headerText.innerText = randomName;

    // Again
    startLoop();

    // Every 3 sec
  }, 1500);
}

// Begins
startLoop();

function seleccionaNombre() {
  let nombreAleatorio = idiomas[Math.floor(Math.random() * idiomas.length)];
  return nombreAleatorio;
}
