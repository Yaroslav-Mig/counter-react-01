import React from 'react';
import Button from '../../button/Button';


const SettingControl = () => {
  return (
    <div className='btn-inner'>
      <Button variant='secondary' outerClass='btn' onClick={() => console.log('set')}>
        Set
      </Button>
    </div>
  );
};

export default SettingControl;
