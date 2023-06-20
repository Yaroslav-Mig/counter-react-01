import React from 'react';
import Input from '../../input/Input';

import css from './Display.module.css';
const { inner, input } = css;

const SettingDisplay = () => {

  return (
    <div className={inner}>
      <Input id='max-number' outerClass={input} type='number' label='max value:' step={1} />
      <Input id='min-number' outerClass={input} type='number' label='min value:' step={1} />
    </div>
  );
};

export default SettingDisplay;
