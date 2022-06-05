import { playableArea } from '../../constants';

export const getPlayableAssets = () =>
  playableArea.querySelectorAll('*') as NodeListOf<HTMLElement>;
