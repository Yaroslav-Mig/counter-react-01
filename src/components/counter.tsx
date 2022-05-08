import React, { FC } from 'react';
import { Display } from './display';
import { Remote } from './remote';

export type CounterProps = {
  number: number;
  addNumber: () => void;
  resetCounter: () => void;
};

export const Counter: FC<CounterProps> = (props) => {
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
				resetCounter={resetCounter} />
		</div>
	);
}

