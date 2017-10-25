import React from 'react';
import ReactDOMServer from 'react-dom/server';
import BlogPageContainer from './components/BlogPageContainer'

const result = ReactDOMServer.renderToString(
  React.createElement(BlogPageContainer)
);

export default result;