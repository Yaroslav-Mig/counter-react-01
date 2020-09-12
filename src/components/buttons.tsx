import React from 'react';

type PropsType = {
  number: number;
  maxValue: number;
  minValue: number;
  addNumber: () => void;
  resetCounter: () => void;
};

export function Remote(props: PropsType) {
  const onClickAddNumber = () => props.addNumber();
  const onClickReset = () => props.resetCounter();
  return (
    <div className='btn-inner'>
      <button
        className='btn'
        disabled={props.number < props.maxValue ? false : true}
        onClick={onClickAddNumber}>
        Increase
      </button>
      <button
        className='btn'
        disabled={props.number === props.minValue ? true : false}
        onClick={onClickReset}>
        Reset
      </button>
    </div>
  );
}
