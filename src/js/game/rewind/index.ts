export const rewindBuffer: number[] = [];

export const addToRewindBuffer = (offsetLeft: number) => {
  if (rewindBuffer.length >= 10) {
    rewindBuffer.shift();
  }
  rewindBuffer.push(offsetLeft);
};
