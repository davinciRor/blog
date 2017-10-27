import React from 'react'
import DOM from 'react-dom-factories';
import Image from './Image'
import TextSpan from './TextSpan'

const Post = ({ image, text }) => {
  return DOM.div(
    {},
    React.createElement(
      Image,
      { image: image }
    ),
    React.createElement(TextSpan, { text: text })
  );
};

export default Post;