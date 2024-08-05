export const pxToEM = (value: number, baseNumber: number = 16) => {
  return `${value / baseNumber}em`;
};
