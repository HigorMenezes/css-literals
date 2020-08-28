import { getUid } from '../utils/uid';
import { createStyleElement } from '../utils/styleElement';
import { templateLiteralsToString } from '../utils/templateLiterals';
import cssPreprocessor from '../utils/cssPreprocessor';

function css(
  strings: TemplateStringsArray,
  ...values: any[]
): (props?: any) => string {
  const className: string = `_css-literals-${getUid()}`;
  const styleElement = createStyleElement();

  return (props) => {
    const rawCss = templateLiteralsToString(strings, values, props);
    const bakedCss = cssPreprocessor(className, rawCss);
    styleElement.setValue(bakedCss);

    return className;
  };
}

export default css;
