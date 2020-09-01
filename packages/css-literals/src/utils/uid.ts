type GetUidType = () => number;

export const getUid: GetUidType = (() => {
  let counter: number = 0;

  return (): number => {
    counter += 1;
    return counter;
  };
})();
