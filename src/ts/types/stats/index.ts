import { GetPositionInObjectType } from '../utils';

export type StateType = {
  player: {
    pos: GetPositionInObjectType;
  };
};

export type UpdatePlayerPositionParam = 'player' | 'pipe';
