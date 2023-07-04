import React, { ChangeEvent } from 'react';
import Input from '../../input/Input';

import css from './Display.module.css';
const { inner, input } = css;

const SettingDisplay = () => {
	const onChangeAction = (e: ChangeEvent<HTMLInputElement>) => {
		console.log(typeof e.target.value);
	};

  return (
    <div className={inner}>
      <Input
        id='max-number'
        outerClass={input}
        type='number'
        label='max value:'
        step={1}
        onChange={onChangeAction}
      />
      <Input
        id='min-number'
        outerClass={input}
        type='number'
        label='min value:'
        step={1}
        onChange={onChangeAction}
      />
    </div>
  );
};

export default SettingDisplay;
