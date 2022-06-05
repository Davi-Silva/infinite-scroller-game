import { getPlayableAssets } from '../selectors';
import { getPositionInObject } from '../../utils';

export const stopAnimations = () => {
  const assets = getPlayableAssets();

  console.log('assets:', assets);

  assets.forEach((element) => {
    console.log(element.className);
    const pos = getPositionInObject(`.${element.className}`);

    element.style.animation = '';
    element.style.left = `${pos.left}px`;
  });
};
