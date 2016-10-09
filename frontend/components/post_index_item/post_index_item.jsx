import React from 'react';
import { hashHistory } from 'react-router';

class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="post-index-item">
        <img className="post-picture"
          height="600"
          width="600"
          src={this.props.post.image_url} />
      </div>
    );
  }
}

export default PostIndexItem;
