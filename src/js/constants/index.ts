export const clientWidth = document.body.clientWidth;
export const clientHeight = document.body.clientHeight;

export const titleScreen = document.querySelector('.titleScreen');
export const startBtn = titleScreen?.querySelector('.startBtn');
export const endBtn = titleScreen?.querySelector('.endGameBtn');

export const playableArea = document.querySelector<HTMLElement>(
  '.playableArea'
) as HTMLElement;
export const player = document.querySelector<HTMLElement>(
  '.player'
) as HTMLElement;
export const pipe = document.querySelector<HTMLElement>('.pipe') as HTMLElement;
