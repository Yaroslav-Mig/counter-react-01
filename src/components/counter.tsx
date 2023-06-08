import React from 'react';

import Display from './display/Display';
import Remote from './remote/Remote';

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
    <div className='box-counter'>
      <Display number={number} maxValue={maxValue} />
      <Remote
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
