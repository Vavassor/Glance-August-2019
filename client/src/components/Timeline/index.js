import React, {Component} from "react";

export default class Timeline extends Component {
  render() {
    const {posts} = this.props;
    
    const renderPost = (post) => {
      return (
        <p key={post.id}>{post.title}</p>
      );
    };

    return (
      <>
        {posts.map(renderPost)}
      </>
    );
  }
}