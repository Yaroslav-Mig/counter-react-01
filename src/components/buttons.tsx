import React from 'react';
import { PropsType } from './counter';

export function Remote(props: PropsType) {
  const onClickAddNumber = () => props.addNumber && props.addNumber();
  const onClickReset = () => props.resetCounter && props.resetCounter();
  return (
    <div className='btn-inner'>
      <button
        className='btn'
        disabled={props.number === props.maxValue ? true : false}
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
