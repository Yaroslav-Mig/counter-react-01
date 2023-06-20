import React from 'react';

import clsx from 'clsx';
import css from './Display.module.css';

import { CounterProps } from '../Counter';

type CounterDisplayProps = Omit<CounterProps, 'addNumber' | 'resetCounter'> & {
  maxValue: number;
};

const { inner, number_max } = css;

const CounterDisplay = (props: CounterDisplayProps): JSX.Element => {
  const { number, maxValue } = props;

  const classes = clsx(inner, number >= maxValue && number_max);

  return <p className={classes}>{number}</p>;
};

export default CounterDisplay;
