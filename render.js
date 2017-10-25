import React from 'react';
import ReactDOMServer from 'react-dom/server';
import BlogItemContainer from './components/BlogItemContainer'

const result = ReactDOMServer.renderToString(
  React.createElement(
    BlogItemContainer,
    {
      imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYWzJXeARnRxPHBcbwzsrJhDPpbBunuMv5YbrlU5EcY1giEGeT',
      imageAlt: 'EARTH',
      imageWidth: '500px',
      imageHeight: '500px',
      itemText: 'Hello my dear earth'
    }
  )
);

export default result;