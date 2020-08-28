import Stylis from '@emotion/stylis';

const stylis = new Stylis();

function cssPreprocessor(className: string, rawCss: string): string {
  const bakedCss: string = stylis(`.${className}`, rawCss);
  return bakedCss;
}

export default cssPreprocessor;
