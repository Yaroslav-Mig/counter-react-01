import React from 'react';
import clsx from 'clsx';
import css from './Display.module.css';
import { CounterProps } from '../Counter';

type DisplayProps = Omit<CounterProps, 'addNumber' | 'resetCounter'> & {
  maxValue: number;
};

const { box, number_max } = css;

const Display = (props: DisplayProps): JSX.Element => {
  const { number, maxValue } = props;

  const classes = clsx(box, number >= maxValue && number_max);

  return <div className={classes}>{number}</div>;
};

export default Display;
