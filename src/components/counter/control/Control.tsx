import React from 'react';

import Button from '../../button/Button';
import { CounterProps } from '../Counter';

type CounterRemoteProps = CounterProps & {
  maxValue: number;
  minValue: number;
};

const CounterControl = (props: CounterRemoteProps): JSX.Element => {
  const { number, maxValue, minValue, addNumber, resetCounter } = props;

  const disabledMax = number >= maxValue;
  const disabledMin = number <= minValue;

  return (
    <div className='btn-inner'>
      <Button variant='secondary' outerClass='btn' disabled={disabledMax} onClick={addNumber}>
        Increase
      </Button>
      <Button variant='secondary' outerClass='btn' disabled={disabledMin} onClick={resetCounter}>
        Reset
      </Button>
    </div>
  );
};

export default CounterControl;
