import React from 'react'
import DOM from 'react-dom-factories';

const TextSpan = ({text}) => {
  return DOM.span({}, text);
};

export default TextSpan;