import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { css } from 'css-literals';

const style = css`
  color: white;
  background-color: black;
`;

const App = () => {
  return <h1 className={style()}>Hello worldssss</h1>;
};

export default App;
