import React from 'react';
import { Display } from './display';
import { Remote } from './buttons';

export type PropsType = {
  number: number;
  addNumber: () => void;
  resetCounter: () => void;
};

export function Counter(props: PropsType) {
  const maxValue = 5;
  const minValue = 0;

  return (
    <div className='box-counter'>
      <Display number={props.number} maxValue={maxValue} />
      <Remote
        number={props.number}
        maxValue={maxValue}
        minValue={minValue}
        addNumber={props.addNumber}
        resetCounter={props.resetCounter}
      />
    </div>
  );
}
