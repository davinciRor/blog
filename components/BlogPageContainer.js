import React from 'react';
import DOM from 'react-dom-factories';
import BlogItemListContainer from './BlogItemListContainer'

class BlogPageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogPosts: [
        {
          imageSrc: 'https://1079638729.rsc.cdn77.org/pic/v2/gallery/preview/fon-kosmos-pejzazh-31991.jpg',
          imageAlt: 'ALT1',
          imageWidth: '500px',
          imageHeight: '550px',
          itemText: 'FIRST COSMOS, FIRST COSMOS, FIRST COSMOS, FIRST COSMOS, FIRST COSMOS'
        },
        {
          imageSrc: 'http://soft.sibnet.ru/data/screenshot/Space__001604_1.jpg',
          imageAlt: 'ALT2',
          imageWidth: '500px',
          imageHeight: '550px',
          itemText: 'SECOND COSMOS, SECOND COSMOS, SECOND COSMOS, SECOND COSMOS, SECOND COSMOS'
        },
        {
          imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCQ_YF24Yy2iN_Nrm-2eZadgmYIQAJbCHTA-ru27Pt_2N4TBvt',
          imageAlt: 'ALT2',
          imageWidth: '500px',
          imageHeight: '550px',
          itemText: 'SECOND COSMOS, SECOND COSMOS, SECOND COSMOS, SECOND COSMOS, SECOND COSMOS'
        }
      ]
    };
  }

  render() {
    return React.createElement(BlogItemListContainer, { posts: this.state.blogPosts });
  }
}

export default BlogPageContainer;