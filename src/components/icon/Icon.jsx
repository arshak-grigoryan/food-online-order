import React from 'react';
import './icon.scss';

function Icon({ type, style = {} }) {
  return (
    <div className='faicon'>
      <i className={type} style={style}></i>
    </div>
  );
}

export default Icon;
