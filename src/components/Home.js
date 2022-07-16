import React, { Component } from 'react';
import PostsList from './PostsList';

class Home extends Component {
  render() {
    const { posts } = this.props;
    return (
      <div className="home">
        <PostsList posts={posts} />
      </div>
    );
  }
}

export default Home;
