import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import { Link } from 'react-router-dom';
import { CreatePost } from './';

class PostsList extends Component {
   render() {
      const { posts } = this.props;
    return (
      <div className="posts-list">
        <CreatePost />
        {posts.map((post) => (
          <div className="post-wrapper" key={post._id}>
            <div className="post-header">
              <div className="post-avatar">
                <Link to={`/user/${post.user._id}`}>
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/149/149071.png"
                    alt="avatar"
                  />
                </Link>
                <div>
                  <span className="post-author">{post.user.name}</span>
                  <span className="post-time">a minute ago</span>
                </div>
              </div>
              <div className="post-content">{post.content}</div>

              <div className="post-actons">
                <div className="post-like">
                  <i className="fa-solid fa-thumbs-up"></i>
                  <span>{post.likes.length}</span>
                </div>

                <div className="post-comments-icon">
                  <i className="fa-solid fa-comment"></i>
                  <span>{post.comments.length}</span>
                </div>
              </div>
              <div className="post-comment-box">
                <input placeholder="comment"></input>
              </div>
              <div className="post-comments-list">
                <div className="post-comments-item">
                  <div className="post-comment-header">
                    <span className="post-commment-author">Bill</span>
                    <span className="post-commment-time">a minute ago</span>
                    <span className="post-commment-like">22</span>
                  </div>
                  <div className="post=comment-content">Random comment</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

PostsList.propTypes = {
  posts: PropTypes.array.isRequired,
}


export default PostsList;
