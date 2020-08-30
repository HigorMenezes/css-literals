interface objCompareInterface {
  [key: string]: string;
}

function shallowCompare(
  obj: objCompareInterface,
  prevObj: objCompareInterface,
) {
  return !Object.keys({ ...obj, ...prevObj }).find(
    (key) => obj[key] !== prevObj[key],
  );
}

export default shallowCompare;
