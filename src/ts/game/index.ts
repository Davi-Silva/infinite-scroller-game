import { pipe } from '../constants';
import { getPositionInObject } from '../utils';
import { addToRewindBuffer } from './rewind';
import { stopAnimations } from './animations';
import { stats, updateAssetPosition } from '../stats';

export let hasGameStarted = false;
let gameLoop: number;

export const startGame = () => {
  hasGameStarted = true;

  gameLoop = setInterval(() => {
    addToRewindBuffer(pipe.offsetLeft);
    updateAssetPosition('pipe');
    updateAssetPosition('player');
  }, 10);

  pipe.style.animation = 'pipeMove 3s linear infinite';
};

export const endGame = () => {
  hasGameStarted = false;

  stopAnimations();
  clearInterval(gameLoop);
};
