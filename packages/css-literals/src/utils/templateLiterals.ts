interface PropsInterface {
  [key: string]: any;
}

type ValueFunctionType = (props: PropsInterface) => string;
type ValueType = string | number | ValueFunctionType;

export function templateLiteralsToString(
  strings: TemplateStringsArray,
  values: ValueType[],
  props: PropsInterface,
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
