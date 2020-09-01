import { getUid } from './uid';

interface StyleObjectInterface {
  [key: string]: string;
}

export interface GetClassesFromObjectReturnInterface {
  [key: string]: string;
}

export function getClassesFromObject(
  styleObject: StyleObjectInterface,
): GetClassesFromObjectReturnInterface {
  const classes = Object.keys(styleObject).reduce(
    (accumulator, currentValue) => {
      return {
        ...accumulator,
        [currentValue]: `_css-literals-${currentValue}-${getUid()}`,
      };
    },
    {},
  );

  return classes;
}
