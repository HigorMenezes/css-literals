import { getUid } from './uid';

interface styleObjectInterface {
  [key: string]: string;
}

export interface getClassesFromObjectReturnInterface {
  [key: string]: string;
}

export function getClassesFromObject(
  styleObject: styleObjectInterface,
): getClassesFromObjectReturnInterface {
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
