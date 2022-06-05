import { startBtn, endBtn, score } from './constants';
import { move } from './game/controllers';
import { startGame, endGame } from './game';
import { stats } from './stats';

document.addEventListener('keydown', (e) => {
  move(e.key);
});

startBtn?.addEventListener('click', startGame);
endBtn?.addEventListener('click', endGame);
