interface propsInterface {
  [key: string]: any;
}

type valueFunctionType = (props: propsInterface) => string;
type valueType = string | number | valueFunctionType;

export function templateLiteralsToString(
  strings: TemplateStringsArray,
  values: valueType[],
  props: propsInterface,
): string {
  const bakedString: string = strings.reduce(
    (accumulator: string, currentValue: string, currentIndex: number) => {
      let valueString: string = '';

      const value = values[currentIndex];

      if (typeof value === 'function') {
        valueString = value(props);
      } else if (typeof value === 'string' || typeof value === 'number') {
        valueString = String(value);
      }

      return accumulator + currentValue + valueString;
    },
    '',
  );

  return bakedString;
}
