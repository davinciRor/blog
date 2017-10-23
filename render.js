import React from 'react';
import ReactDOMServer from 'react-dom/server';
import ImageContainer from './ImageContainer';


const result = ReactDOMServer.renderToString(
  React.createElement(
    ImageContainer,
    {
      imageWidth: '40px',
      imageHeight: '60px',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_nsIrRoCHXaYT1ILytn56KKJQkIi3kWE2jzGyNzFg9Z8AnGUclg',
      captionText: 'Hello girl!'
    }
  )
);

export default result;