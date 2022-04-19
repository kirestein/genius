let order = [];
let clickedOrder = [];
let score = 0;

/**
 * 0 => verde
 * 1 => vermelho
 * 2 => azul
 * 3 => amarelo
 */

let blue = $('.blue');
let yellow = $('.yellow');
let red = $('.red');
let green = $('.green');

const shuffleOrder = _ => { //ordem aleatória
  let randomColor = Math.floor(Math.random() * 4);
  order[order.length] = randomColor;
  clickedOrder = [];

  for (let i in order) {
    let elementColor = createColorElement(order[i]);
    lightColor(elementColor, Number(i) + 1);
  }
}

const lightColor = (element, number) => { //acende cor
  number = number * 500;
  setTimeout(() => {
    element.toggleClass('selected');
  }, number - 250);
  setTimeout(() => {
    element.removeClass('selected');
  });
}

const checkOrder = () => {
  for (let i in clickedOrder) {
    if (clickedOrder[i] !== order[i]) {
      gameOver();
      break;
    }
  }
  if (clickedOrder.length == order.length) {
    alert(`Pontuação: ${score}\n Você acertou! Iniciando próximo nível!`);
    nextLevel();
  }
}

/**função para o clique do usuário */

const click = (color) => {
  clickedOrder[clickedOrder.length] = color;
  createColorElement(color).toggleClass('selected');

  setTimeout(() => {
    createColorElement(color).removeClass('selected');
    checkOrder();
  }, 250);
}

/**função que retorna a cor */

const createColorElement = (color) => {
  if (color == 0) return green;
  else if (color == 1) return red;
  else if (color == 2) return blue;
  else return yellow;
}

const nextLevel = () => {
  score++;
  shuffleOrder();
}

const gameOver = () => {
  alert(`Pontuação: ${score}! \n Você perdeu o jogo! \n Clique em ok para um novo jogo`);
  order = [];
  clickedOrder = [];

  playGame();
}

const playGame = () => {
  alert('Welcome to Genius! \n Starting the game!')
  score = 0;

  nextLevel();

}

// green.on('click', click(0));
// red.on('click', click(1));
// blue.on('click', click(2));
// yellow.on('click', click(3));

green.click(() => click(0));
red.click(() => click(1));
blue.click(() => click(2));
yellow.click(() => click(3));

playGame()
