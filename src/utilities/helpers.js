import { RepeatWrapping } from "three";

export const sceneWidth = () => {
  // Maintain a 4:3 aspect ratio on wide screens, shrink on portrait screens
  const actualWidth = window.innerWidth;
  const idealWidth = window.innerHeight * 1.3333;
  if (idealWidth > actualWidth) {
    document.documentElement.style.setProperty(
      "--scene-width",
      `${actualWidth}px`
    );
    return actualWidth;
  }
  document.documentElement.style.setProperty(
    "--scene-width",
    `${idealWidth}px`
  );
  return idealWidth;
};
export const randomSize = () => Math.random() * 2 + 1;
export const randomPosition2 = (max) => Math.random() * max - max * 0.5;
export const randomPosition = (val) => {
  const min = val * -1;
  const max = val;
  return Math.random() * (max - min) + min;
};

export const getRandomPositionsNotInCenter = (w, h) => {
  let randomX = randomPosition(w);
  let randomY = randomPosition(h);
  while (randomX > -30 && randomX < 30) {
    randomX = randomPosition(w);
  }
  while (randomY > -30 && randomY < 30) {
    randomY = randomPosition(h);
  }
  return [randomX, randomY];
};