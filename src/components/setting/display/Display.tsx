import React from 'react';
import Input from '../../input/Input';

import css from './Display.module.css';
const { inner } = css;

const SettingDisplay = () => {

  return (
    <div className={inner}>
      <Input id='max-number' type='number' label='max value:' step={1} />
      <Input id='min-number' type='number' label='min value:' step={1} />
    </div>
  );
};

export default SettingDisplay;
