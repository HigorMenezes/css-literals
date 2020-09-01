interface CreateStyleElementReturnInterface {
  setValue(value: string): void;
}

export function createStyleElement(): CreateStyleElementReturnInterface {
  const styleElement = document.createElement('style');
  const headElement = document.getElementsByTagName('head')[0];
  headElement.appendChild(styleElement);

  function setValue(value: string) {
    styleElement.innerHTML = value;
  }

  return {
    setValue,
  };
}
