import React from 'react';
// import { PropsType } from './counter';

type PropsType = {
  number: number;
  maxValue: number;
};

export function Display(props: PropsType) {
  return (
    <div className={props.number === props.maxValue ? 'number number-max' : 'number'}>
      {props.number}
    </div>
  );
}
