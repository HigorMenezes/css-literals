export function templateLiteralsToString(
  strings: TemplateStringsArray,
  values: any[],
  props: any,
) {
  const bakedString: string = strings.reduce(
    (accumulator: string, currentValue: string, currentIndex: number) => {
      let value: string;

      if (typeof values[currentIndex] === 'function') {
        value = values[currentIndex](props);
      } else {
        value = String(values[currentIndex]);
      }

      return accumulator + currentValue + value;
    },
    '',
  );

  return bakedString;
}
