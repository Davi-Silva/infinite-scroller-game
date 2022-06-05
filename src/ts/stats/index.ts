import { getPositionInObject } from '../utils';
import { UpdatePlayerPositionParam } from '../types/stats';

export let stats = {
  player: {
    pos: { ...getPositionInObject('.player') },
  },
  pipe: {
    pos: { ...getPositionInObject('.pipe') },
  },
  score: 0,
};

export const updateAssetPosition = (asset: UpdatePlayerPositionParam) => {
  stats[asset].pos = { ...getPositionInObject(`.${asset}`) };
};

export const updateScore = (points: number) => {
  stats.score += points;
};
