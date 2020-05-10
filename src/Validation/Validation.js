import React from 'react';

const Validation = (props) => {
  const minimumLength = 5;

  let text = 'Text too short';
  if (props.value.length >= minimumLength) {
    text = 'Text long enough';
  }

  return (<p>{text}</p>);
};

export default Validation;
