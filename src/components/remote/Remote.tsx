import React from 'react';
import Button from '../button/Button';
import { CounterProps } from '../Counter';

import css from './Remote.module.css';

type RemoteProps = CounterProps & {
  maxValue: number;
  minValue: number;
};

const { box, btn} = css;

const Remote = (props: RemoteProps): JSX.Element => {
  const { number, maxValue, minValue, addNumber, resetCounter } = props;

  const disabledMax = number >= maxValue;
  const disabledMin = number <= minValue;

  return (
    <div className={box}>
      <Button variant='secondary' outerClass={btn} disabled={disabledMax} onClick={addNumber}>
        Increase
      </Button>
      <Button variant='secondary' outerClass={btn} disabled={disabledMin} onClick={resetCounter}>
        Reset
      </Button>
    </div>
  );
};

export default Remote;