import React from 'react';

import SettingDisplay from './display/Display';
import SettingControl from './control/Control';

const Setting = () => {
  return (
    <div className='box'>
      <SettingDisplay />
      <SettingControl/>
    </div>
  );
};

export default Setting;
