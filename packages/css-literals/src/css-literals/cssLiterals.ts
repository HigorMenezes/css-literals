import { createStyleElement } from '../utils/styleElement';
import { templateLiteralsToString } from '../utils/templateLiterals';
import { getClassesFromObject } from '../utils/cssLiteralsObject';
import cssPreprocessor from '../utils/cssPreprocessor';
import shallowCompare from '../utils/shallowCompare';

interface propsInterface {
  [key: string]: any;
}
interface classesInterface {
  [key: string]: string;
}

type callbackFunctionType = (props: propsInterface) => classesInterface;

function cssLiterals(callback: callbackFunctionType) {
  const styleElement = createStyleElement();
  let prevClasses: classesInterface = {};
  let prevProps: propsInterface = {};

  return (props: any) => {
    if (shallowCompare(props, prevProps)) {
      return prevClasses;
    }

    const styleObject = callback(
      (strings: TemplateStringsArray, ...values: any[]) =>
        templateLiteralsToString(strings, values, props),
    );

    const classes = getClassesFromObject(styleObject);

    let bakedCss: string = '';
    Object.keys(classes).forEach((classKey) => {
      bakedCss += cssPreprocessor(classes[classKey], styleObject[classKey]);
    });

    styleElement.setValue(bakedCss);

    prevProps = props;
    prevClasses = classes;
    return classes;
  };
}

export default cssLiterals;
