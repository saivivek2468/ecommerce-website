export const removeDuplicate = (arr) => {
  const removeDuplicateCartData = arr.filter(
    (obj, index) => index === arr.findLastIndex((o) => o.id === obj.id)
  );

  return removeDuplicateCartData;
};
