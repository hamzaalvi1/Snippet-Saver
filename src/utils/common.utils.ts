
export const removeArraysDuplicatesValues = (
  arr1: (string | number)[],
  arr2: (string | number)[]
) => {
  const set2 = new Set(arr2);
  return arr1.filter((item) => !set2.has(item));
};
