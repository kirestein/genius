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
    let elementColor
  }
}
