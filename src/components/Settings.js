import React, { Component } from 'react';
import { connect } from 'react-redux';

class Setting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
      confirmPassword: '',
      editMode: true,
    };
  }
  render() {
    const { user } = this.props.auth;
    const { editMode } = this.state;
    return (
      <div className="settings">
        <div className="img-container">
          <img
            src="https://cdn-icons-png.flaticon.com/128/149/149071.png"
            alt="user-dp"
            id="user-dp"
          />
        </div>

        <div className="field">
          <div className="field-lable">Email</div>
          <div className="field-value">{user.email}</div>
        </div>

        <div className="field">
          <div className="field-lable">Name</div>
          {editMode ? (
            <input
              type="text"
              onChange={() => this.handelChange()}
              value={this.state.name}
            />
          ) : (
            <div className="field-value">{user.name}</div>
          )}
        </div>
        {editMode && (
          <div className="field">
            <div className="field-lable">New Password</div>
            <input
              type="password"
              onChange={() => this.handelChange()}
              value={this.state.password}
            />
          </div>
        )}

        {editMode && (
          <div className="field">
            <div className="field-lable">Confirm Password</div>
            <input
              type="password"
              onChange={() => this.handelChange()}
              value={this.state.confirmPassword}
            />
          </div>
        )}

        <div className="btn-grp">
          {editMode ? (
            <button className="button save-btn">Save</button>
          ) : (
            <button className="button edit-btn">Edit Profile</button>
          )}

          {editMode && <div className="go-back">Go Back</div>}
        </div>
      </div>
    );
  }
}
function mapStateToProps({ auth }) {
  return {
    auth,
  };
}

export default connect(mapStateToProps)(Setting);
