export function templateLiteralsToString(
  strings: TemplateStringsArray,
  values: any[],
  props: any,
) {
  const bakedString: string = strings.reduce(
    (accumulator: string, currentValue: string, currentIndex: number) => {
      let value: string = '';

      const typeOfValue = typeof values[currentIndex];

      if (typeOfValue === 'function') {
        value = values[currentIndex](props);
      } else if (typeOfValue === 'string' || typeOfValue === 'number') {
        value = String(values[currentIndex]);
      }

      return accumulator + currentValue + value;
    },
    '',
  );

  return bakedString;
}
