import React from 'react';

import CounterDisplay from './display/Display';
import CounterControl from './control/Control';

export type CounterProps = {
  number: number;
  addNumber: () => void;
  resetCounter: () => void;
};

const Counter = (props: CounterProps): JSX.Element => {
  const { number, addNumber, resetCounter } = props;

  const maxValue = 5;
  const minValue = 0;

  return (
    <div className='box'>
      <CounterDisplay number={number} maxValue={maxValue} />
      <CounterControl
        number={number}
        maxValue={maxValue}
        minValue={minValue}
        addNumber={addNumber}
        resetCounter={resetCounter}
      />
    </div>
  );
};

export default Counter;
