import { parseToCollisionObject, stats } from '../../stats';
import { BlockType } from '../../types/game/checks/collision';
import { AssetStatsType } from '../../types/utils';

export const checkCollision = (a: BlockType, b: BlockType): boolean => {
  return !(
    a.y + a.height < b.y ||
    a.y > b.y + b.height ||
    a.x + a.width < b.x ||
    a.x > b.x + b.width
  );
};

export const checkHasCoinCollided = (coins: AssetStatsType[]) => {
  let hasCollided = false;

  coins.forEach((coin) => {
    if (
      checkCollision(
        parseToCollisionObject(stats.player.pos, stats.player.dimensions),
        parseToCollisionObject(coin.pos, coin.dimensions)
      )
    ) {
      hasCollided = true;
      return;
    }
  });

  return hasCollided;
};
