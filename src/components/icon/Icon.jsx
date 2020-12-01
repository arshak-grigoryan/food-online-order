import React from "react";

function Icon({type, ...props}) {
  
  console.log('Icon')

  return <i className={type} {...props}></i>
}

export default Icon;
