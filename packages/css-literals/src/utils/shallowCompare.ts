interface objCompareInterface {
  [key: string]: any;
}

function shallowCompare(
  objA: objCompareInterface,
  objB: objCompareInterface,
): boolean {
  return !Object.keys({ ...objA, ...objB }).find(
    (key) => objA[key] !== objB[key],
  );
}

export default shallowCompare;
