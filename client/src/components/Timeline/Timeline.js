import {Card} from "antd";
import React, {Component} from "react";
import "./Timeline.css";

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
        <Card className="post" title={post.title} key={post.id}>
          {post.content}
        </Card>
      );
    };

    return (
      <div className="timeline">
        {posts.map(renderPost)}
      </div>
    );
  }
}