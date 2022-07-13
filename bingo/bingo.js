function askPlayerNameAndGreet() {
  const playerName = prompt("Hola! ¿cuál es tu nombre?");
  alert(`¡Hola  ${playerName}! ¡Vamos a jugar!`);
}

askPlayerNameAndGreet();

const cardFile = [7, 11, 35, 66, 89];
console.table(cardFile);

function askIfContinue() {
  const continueOrNot = confirm("¿Quieres seguir jugando?");

  if (continueOrNot === true) {
    compareRandomWithCardFile();
  } else {
    alert("¡Muchas gracias por jugar!");
  }
}

const checkNumber = (win, randomNumber) => {
  console.table(cardFile);
  if (win === true) {
    alert("¡Hay una coincidencia!");
  } else {
    alert(`Se ha generado el número ${randomNumber} y no hubo coincidencia`);
  }
  askIfContinue();
};

function compareRandomWithCardFile() {
  const numRandom = Math.floor(Math.random() * 90) + 1;

  for (let i = 0; i < 5; i++) {
    if (numRandom === cardFile[i]) {
      cardFile[i] = "X";
      return checkNumber(true, numRandom);
    }
  }
  return checkNumber(false, numRandom);
}

compareRandomWithCardFile();
