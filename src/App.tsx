import React, { useState } from 'react';

import Counter from './components/counter/Counter';
import Setting from './components/setting/Setting';

import './App.css';

const App = (): JSX.Element => {
  let [number, setNumber] = useState<number>(0);

  const increase = (): void => setNumber((prev) => prev + 1);
  const reset = (): void => setNumber(0);

  return (
    <div className='wrapper'>
      <Setting />
      <Counter number={number} addNumber={increase} resetCounter={reset} />
    </div>
  );
};

export default App;
