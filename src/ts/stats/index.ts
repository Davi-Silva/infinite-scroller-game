import { getPositionInObject, getDimensionsInObject } from '../utils';
import { UpdatePlayerPositionParam } from '../types/stats';
import {
  GetDimensionsInObjectType,
  GetPositionInObjectType,
} from '../types/utils';
import { StatsType } from '../types/stats';

export let stats: StatsType = {
  score: 0,
  player: {
    pos: { ...getPositionInObject('.player') },
    dimensions: { ...getDimensionsInObject('.player') },
  },
  pipe: {
    pos: { ...getPositionInObject('.pipe') },
    dimensions: { ...getDimensionsInObject('.pipe') },
  },
  coins: [
    {
      pos: { ...getPositionInObject('.coin') },
      dimensions: { ...getDimensionsInObject('.coin') },
    },
  ],
};

export const updateAssetPosition = (asset: UpdatePlayerPositionParam) => {
  stats[asset].pos = { ...getPositionInObject(`.${asset}`) };
};

export const updateScore = (points: number) => {
  stats.score += points;
};

export const parseToCollisionObject = (
  pos: GetPositionInObjectType,
  dimensions: GetDimensionsInObjectType
) => {
  return {
    x: pos.left,
    y: pos.top,
    height: dimensions.height,
    width: dimensions.width,
  };
};
