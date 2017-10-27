import React from 'react';
import DOM from 'react-dom-factories';

const ImageContainer = ({ image }) => {
  return DOM.img
  ({
    style: image.style,
    src:   image.src,
    alt:   image.alt
  });
};

export default ImageContainer;