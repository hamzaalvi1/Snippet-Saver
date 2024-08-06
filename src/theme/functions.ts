export const pxToEM = (value: number, baseNumber: number = 16) => {
  return `${value / baseNumber}em`;
};

export function spacing(factor: number) {
  const baseUnit = 16; // 1rem = 16px
  return `${factor / baseUnit}rem`;
}
