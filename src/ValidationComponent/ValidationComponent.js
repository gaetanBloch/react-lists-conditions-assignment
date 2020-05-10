import React from 'react';

const ValidationComponent = (props) => {
  const minimumLength = 5;

  return (
    <p>{props.length >= minimumLength ? 'Text long enough' : 'Text too short'}</p>
  )
}

export default ValidationComponent;
