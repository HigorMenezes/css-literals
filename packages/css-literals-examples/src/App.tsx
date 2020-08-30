import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { cssLiterals } from 'css-literals';

const style = cssLiterals((css) => ({
  button: css`
    color: white;
    background-color: black;

    &:hover {
      color: black;
      background-color: white;
    }
  `,
  button2: css`
    color: black;
    background-color: white;

    &:hover {
      color: white;
      background-color: black;
    }
  `,
}));

const App = () => {
  const classes = style({ color: 'black' });
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <h1 className={toggle ? classes.button : classes.button2}>
        Hello worldssss
      </h1>
      <button type="button" onClick={() => setToggle((prev) => !prev)}>
        click
      </button>
    </>
  );
};

export default App;
