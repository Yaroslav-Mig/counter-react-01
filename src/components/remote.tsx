import React, { FC } from 'react';
import { CounterProps } from './counter';

type RemoteProps = CounterProps & {
  maxValue: number;
  minValue: number;
};

export const Remote: FC<RemoteProps> = (props) => {
	const { number, maxValue, minValue, addNumber, resetCounter } = props;

  const addNumberHandler = () => addNumber();
	const resetHandler = () => resetCounter();

  const disabledMax = number >= maxValue ? true : false;
	const disabledMin = number <= minValue ? true : false;

  return (
    <div className='btn-inner'>
      <button className='btn' disabled={disabledMax} onClick={addNumberHandler}>
        Increase
      </button>
      <button className='btn' disabled={disabledMin} onClick={resetHandler}>
        Reset
      </button>
    </div>
  );
};
