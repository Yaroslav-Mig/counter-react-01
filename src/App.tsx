import React, { useState } from 'react';
import './App.css';
import { Counter } from './components/counter';

const App = (): JSX.Element => {
  let [number, setNumber] = useState<number>(0);

  const increase = (): void => setNumber(number + 1);
  const reset = (): void => setNumber(0);

  return (
    <div className='wrapper'>
      <Counter number={number} addNumber={increase} resetCounter={reset} />
    </div>
  );
};

export default App;
