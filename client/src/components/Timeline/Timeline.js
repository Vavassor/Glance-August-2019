import React, {Component} from "react";

const loadStatus = {
  FAILURE: "FAILURE",
  NONE: "NONE",
  REQUEST: "REQUEST",
  SUCCESS: "SUCCESS",
};

export default class Timeline extends Component {
  render() {
    const {posts} = this.props;
    
    const renderPost = (post) => {
      return (
        <p key={post.id}>
          {post.title}
        </p>
      );
    };

    return (
      <>
        {posts.map(renderPost)}
      </>
    );
  }
}