import React from 'react';

const ValidationComponent = (props) => {
  const minimumLength = 5;

  let text;
  if (props.value.length >= minimumLength) {
    text = 'Text long enough';
  } else {
    text = 'Text too short';
  }

  return (<p>{text}</p>);
};

export default ValidationComponent;
