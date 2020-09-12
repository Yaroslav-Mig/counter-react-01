import React from 'react';
import { PropsType } from './counter';

export function Display(props: PropsType) {
  return (
    <div className={props.number === props.maxValue ? 'number number-max' : 'number'}>
      {props.number}
    </div>
  );
}
