import React, { Component } from 'react';
import PropTypes from 'prop-types'; 

class PostsList extends Component {
   render() {
      const { posts } = this.props;
    return (
        <div className="posts-list">
          {posts.map((post) => (
            <div className="post-wrapper" key={post._id}>
              <div className="post-header">
                <div className="post-avatar">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/149/149071.png"
                    alt="avatar"
                  />
                  <div>
                    <span className="post-author">{post.user.name}</span>
                    <span className="post-time">a minute ago</span>
                  </div>
                </div>
                <div className="post-content">{post.content}</div>

                <div className="post-actons">
                  <div className="post-like">
                    {/* <img
                      src="https://cdn-icons-png.flaticon.com/128/1077/1077035.png"
                      alt="likes-icon"
                    /> */}
                    <i class="fa-solid fa-thumbs-up"></i>
                    <span>{post.likes.length}</span>
                  </div>

                  <div className="post-comments-icon">
                    {/* <img
                      src="https://cdn-icons.flaticon.com/png/128/3114/premium/3114810.png?token=exp=1657964039~hmac=4b71dbf555f5c4996b135795cc358f9f"
                      alt="comments-icon"
                    />  */}
                    <i class="fa-solid fa-comment"></i>
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
