import React from "react";
import './icon.css'

function Icon({type, ...props}) {
  return <i className={type} {...props}></i>
}

export default Icon;
