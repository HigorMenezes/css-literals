import { createStyleElement } from '../utils/styleElement';
import { templateLiteralsToString } from '../utils/templateLiterals';
import { getClassesFromObject } from '../utils/cssLiteralsObject';
import cssPreprocessor from '../utils/cssPreprocessor';
import shallowCompare from '../utils/shallowCompare';

type ValueFunctionType = (props: PropsInterface) => string;
type ValueType = string | number | ValueFunctionType;

type CssFunctionType = (
  strings: TemplateStringsArray,
  ...values: ValueType[]
) => string;
interface PropsInterface {
  [key: string]: any;
}
interface ClassesInterface {
  [key: string]: string;
}

type CallbackFunctionType = (cssFunction: CssFunctionType) => ClassesInterface;

function cssLiterals(callback: CallbackFunctionType) {
  const styleElement = createStyleElement();
  let prevClasses: ClassesInterface = {};
  let prevProps: PropsInterface = {};

  return (props: any) => {
    if (shallowCompare(props, prevProps)) {
      return prevClasses;
    }

    const styleObject = callback(
      (strings: TemplateStringsArray, ...values: ValueType[]) =>
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
