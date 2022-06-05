import { player, playableArea } from '../../constants';
import { hasGameStarted } from '..';

export const move = (key: string) => {
  if (!hasGameStarted) return;

  const computed = window.getComputedStyle(player);
  const step = 10;

  const playableAreaBounding = playableArea.getBoundingClientRect();
  const playerBounding = player.getBoundingClientRect();

  switch (key) {
    case 'a': {
      const left = parseInt(computed.left.split('px')[0]);
      if (left > 0) {
        player.style.left = `${left - step}px`;
      }
      break;
    }
    case 'd': {
      const left = parseInt(computed.left.split('px')[0]);
      if (left + playerBounding.width < playableAreaBounding.width) {
        player.style.left = `${left + step}px`;
      }
      break;
    }
    case 's': {
      const bottom = parseInt(computed.bottom.split('px')[0]);
      if (bottom > 0) {
        player.style.bottom = `${bottom - step}px`;
      }
      break;
    }
    case 'w': {
      const bottom = parseInt(computed.bottom.split('px')[0]);
      if (bottom < playableAreaBounding.height - playerBounding.height) {
        player.style.bottom = `${bottom + step}px`;
      }
      break;
    }
  }
};
