import { pipe, titleScreen, score } from '../constants';
import { removeCoin, stopAnimations } from './animations';
import {
  parseToCollisionObject,
  stats,
  updateAssetPosition,
  updateScore,
} from '../stats';
import { checkCollision, checkHasCoinCollided } from './checks/colision';

export let hasGameStarted = false;
let gameLoop: number;

export const startGame = () => {
  hasGameStarted = true;

  titleScreen?.remove();

  gameLoop = setInterval(() => {
    const hasPipeCollided = checkCollision(
      parseToCollisionObject(stats.player.pos, stats.player.dimensions),
      parseToCollisionObject(stats.pipe.pos, stats.pipe.dimensions)
    );

    if (hasPipeCollided) endGame();

    let hasCoinCollided = checkHasCoinCollided(stats.coins);

    if (hasCoinCollided) {
      updateScore(10);
      removeCoin();
      score.innerHTML = `${stats.score}`;
      hasCoinCollided = false;
    }

    updateAssetPosition('pipe');
    updateAssetPosition('player');
  }, 10);

  pipe.style.animation = 'pipeMove 3s linear infinite';
};

export const endGame = () => {
  hasGameStarted = false;

  stopAnimations();
  clearInterval(gameLoop);
  console.clear();
};
