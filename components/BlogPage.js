import React from 'react';
import PostsList from './PostsList'

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    const baseImageStyle = {
      width: '400px',
      height: '450px'
    };
    this.state = {
      blogPosts: [
        {
          image: {
            style: baseImageStyle,
            src: 'https://1079638729.rsc.cdn77.org/pic/v2/gallery/preview/fon-kosmos-pejzazh-31991.jpg',
            alt: 'ALT1'
          },
          text: 'FIRST COSMOS, FIRST COSMOS, FIRST COSMOS, FIRST COSMOS, FIRST COSMOS'
        },
        {
          image: {
            style: baseImageStyle,
            src: 'http://soft.sibnet.ru/data/screenshot/Space__001604_1.jpg',
            alt: 'ALT2'
          },
          text: 'SECOND COSMOS, SECOND COSMOS, SECOND COSMOS, SECOND COSMOS, SECOND COSMOS'
        }
      ]
    };
  }

  render() {
    return React.createElement(PostsList, this.state);
  }
}

export default BlogPage;