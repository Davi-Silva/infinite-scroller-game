import { startBtn, endBtn } from './constants';
import { move } from './game/controllers';
import { startGame, endGame } from './game';

document.addEventListener('keydown', (e) => {
  move(e.key);
});

startBtn?.addEventListener('click', startGame);
endBtn?.addEventListener('click', endGame);
