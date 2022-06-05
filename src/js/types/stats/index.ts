import { GetPositionInObjectType } from '../../types/utils';

export type StateType = {
  player: {
    pos: GetPositionInObjectType;
  };
};

export type UpdatePlayerPositionParam = 'player' | 'pipe';
