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

const shuffleOrder = _ => {
  let randomColor = Math.floor(Math.random * 4);
  order[order.length] = randomColor;
  clickedOrder = [];

  for (let i in order) {
    let elementColor = createColorElement(order[i]);
    lightColor(elementColor, Number(i) + 1);
  }
}

const lightColor = (element, number) => {
  number = number * 500;
  setTimeout(() => {
    element.classList.add('.selected');
  }, number - 250);
  setTimeout(() => {
    element.classList.remove('.selected');
  });
}

const checkOrder = () => {
  for (let i in clickedOrder) {
    if (clickedOrder[i] !== order[i]) {
      lose();
      break;
    }
  }
  if (clickedOrder.length == order.length) {
    alert(`Pontuação: ${score}\n Você acertou! Iniciando próximo nível!`);
    nextLevel();
  }
}
