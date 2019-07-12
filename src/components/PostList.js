import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class PostList extends React.Component {
  // Once the component renders,
  componentDidMount() {
    // use fetchPosts action creator to make a request to the API and get the posts to be listed
    this.props.fetchPosts();
  }
  render() {
    return <div>Post List</div>;
  }
}

// The 1st argument would have been "mapStateToProps" except we don't want any state to get into this component, so we pass in "null" into connect. The only reason this component is a class component is b/c we want to use a lifecycle method (componentDidMount()). We want to use componentDidMount() to run code that makes a request to the API and gets some data back to be used in this component (in this case to list the posts)
export default connect(
  null,
  { fetchPosts }
)(PostList);
