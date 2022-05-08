import React, { FC } from 'react';
import { CounterProps } from './counter';

type DisplayProps = Omit<CounterProps, 'addNumber' | 'resetCounter'> & {
  maxValue: number;
};

export const Display: FC<DisplayProps> = (props) => {
	const { number, maxValue } = props;
	const classNumber = number < maxValue ? 'number' : 'number number-max';

  return <div className={classNumber}>{props.number}</div>;
};
