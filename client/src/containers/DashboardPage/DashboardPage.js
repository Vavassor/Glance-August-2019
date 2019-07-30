import {connect} from "react-redux";
import {Icon, Layout} from "antd";
import Nav from "../Nav";
import React, {Component} from "react";
import Timeline from "../../components/Timeline";
import {withRouter} from "react-router-dom";

class DashboardPage extends Component {
  render() {
    const {posts} = this.props;

    return (
      <Layout>
        <Layout.Sider>
          <Nav />
        </Layout.Sider>

        <Layout>
          <Layout.Header className="layout-header">
            <h1>Timeline</h1>
          </Layout.Header>

          <Layout.Content className="layout-content">
            <Timeline posts={posts} />
          </Layout.Content>

          <Layout.Footer>
            <a href="https://github.com/Vavassor/Glance"><Icon type="github" /> Github</a>
          </Layout.Footer>
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.timeline.posts,
  };
};

export default withRouter(connect(mapStateToProps)(DashboardPage));