import { clientHeight, clientWidth } from '../constants';

import {
  GetPositionInObjectType,
  GetDimensionsInObjectType,
} from '../types/utils';

const getComputedStyle = (selector: string) => {
  const element = document.querySelector<HTMLElement>(selector) as HTMLElement;
  const computed = window.getComputedStyle(element);

  return computed;
};

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
  const computed = getComputedStyle(selector);

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

export const getDimensionsInObject = (
  selector: string
): GetDimensionsInObjectType => {
  const computed = getComputedStyle(selector);

  const height = getPxNumber(computed.height);
  const width = getPxNumber(computed.width);

  return {
    height,
    width,
  };
};
