type getUidType = () => number;

export const getUid: getUidType = (() => {
  let counter: number = 0;

  return (): number => {
    counter += 1;
    return counter;
  };
})();
