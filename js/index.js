const pipe = document.querySelector('.pipe');

const gameLoop = setInterval(() => {
  console.log(pipe.offsetLeft);
}, 10);

setTimeout(() => {
  clearInterval(gameLoop);
}, 10000);
