import { clientHeight, clientWidth } from '../constants';

import { GetPositionInObjectType } from '../types/utils';

export const roundNumber = (number: number) =>
  Math.round((number + Number.EPSILON) * 100) / 100;

export const getPxNumber = (px: string): number => parseInt(px.split('px')[0]);

export const getPostionInPercent = (
  postionNumber: number,
  clientDimension: number
): number => roundNumber((postionNumber / clientDimension) * 100);

export const getPositionInObject = (
  selector: string,
  inPercent?: boolean
): GetPositionInObjectType => {
  const element = document.querySelector<HTMLElement>(selector) as HTMLElement;
  const computed = window.getComputedStyle(element);

  const leftNumber = getPxNumber(computed.left);
  const left = roundNumber((leftNumber / clientWidth) * 100);

  const topNumber = getPxNumber(computed.top);
  const top = getPostionInPercent(topNumber, clientHeight);

  const rightNumber = getPxNumber(computed.right);
  const right = getPostionInPercent(rightNumber, clientWidth);

  const bottomNumber = getPxNumber(computed.bottom);
  const bottom = getPostionInPercent(bottomNumber, clientHeight);

  return {
    left: inPercent ? left : leftNumber,
    top: inPercent ? top : topNumber,
    right: inPercent ? right : rightNumber,
    bottom: inPercent ? bottom : bottomNumber,
  };
};
