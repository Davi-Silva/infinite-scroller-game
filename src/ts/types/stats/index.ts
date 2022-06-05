import { AssetStatsType } from '../utils';

export type StatsType = {
  score: number;
  player: AssetStatsType;
  pipe: AssetStatsType;
  coins: AssetStatsType[];
};

export type UpdatePlayerPositionParam = 'player' | 'pipe';
