import {connect} from "react-redux";
import Nav from "../Nav";
import React, {Component} from "react";
import Timeline from "../../components/Timeline";
import {withRouter} from "react-router-dom";

class DashboardPage extends Component {
  render() {
    const {posts} = this.props;

    return (
      <>
        <Nav />
        <Timeline posts={posts} />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.timeline.posts,
  };
};

export default withRouter(connect(mapStateToProps)(DashboardPage));