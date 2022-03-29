import React from 'react';

import {CloseOutlined} from '@ant-design/icons';

import './CloseButton.scss';

const CloseButton = ({onClick}) => {
  return (
    <div className='close-button' onClick={onClick}>
      <CloseOutlined style={{fontSize: '1em', color: '#000'}}/>
    </div>
  )
}

export default CloseButton;