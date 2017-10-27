import React from 'react'
import DOM from 'react-dom-factories';
import Post from './Post'
import _ from 'lodash';

const PostsList = ({ blogPosts }) => {
  return DOM.ul(
    null,
    _.map(
      blogPosts,
      (post, key) => {
        return DOM.li({ key }, React.createElement(
          Post,
          post
        ));
      }
    )
  );
};

export default PostsList;