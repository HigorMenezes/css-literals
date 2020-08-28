export const getUid: () => number = (() => {
  let counter: number = 0;

  return (): number => {
    counter += 1;
    return counter;
  };
})();
