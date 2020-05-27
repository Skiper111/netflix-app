import React from "react";

const HeroButton = (props) => {
  let icons = <i className={props.icon}></i>;

  if (props.icon === undefined || props.icon === '') {
    icons = null
  }

  return (
      <a href='#' className='Button' data-primary={props.primary}>{icons}&nbsp;{props.text}</a>
  )
};

export default HeroButton;