interface ObjCompareInterface {
  [key: string]: any;
}

function shallowCompare(
  objA: ObjCompareInterface,
  objB: ObjCompareInterface,
): boolean {
  return !Object.keys({ ...objA, ...objB }).find(
    (key) => objA[key] !== objB[key],
  );
}

export default shallowCompare;
