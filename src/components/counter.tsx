import React from 'react';
// import { Display } from './display';

type PropsType = {
  number: number;
  addNumber: () => void;
  resetCounter: () => void;
};

export function Counter(props: PropsType) {
  const onClickAddNumber = () => props.addNumber();
  const onClickReset = () => props.resetCounter();

  const maxValue = 5;
  const minValue = 0;

  return (
    <div className='box-counter'>
      <div className={props.number === maxValue ? 'number number-max' : 'number'}>
        {props.number}
      </div>
      <div className='btn-inner'>
        <button
          className='btn'
          disabled={props.number < maxValue ? false : true}
          onClick={onClickAddNumber}>
          Increase
        </button>
        <button
          className='btn'
          disabled={props.number === minValue ? true : false}
          onClick={onClickReset}>
          Reset
        </button>
      </div>
    </div>
  );
}
