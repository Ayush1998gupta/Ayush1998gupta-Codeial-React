import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login, clearAuthState } from '../actions/auth';

class Login extends Component {
  constructor(props) {
    super(props);
    //  this.emailInputRef = React.createRef();
    //  this.passwordInputRef = React.createRef();
    this.state = {
      email: '',
      password: '',
    };
  }
  componentWillUnmount() {
    this.props.dispatch(clearAuthState());
  }

  handelEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handelPasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handelFormSummit = (e) => {
    e.preventDefault();
    //  console.log('this.emailInputRef', this.emailInputRef);
    //  console.log('this.emailIpasswordInputRefnputRef', this.passwordInputRef);
    console.log(this.state);
    const { email, password } = this.state;

    if (email && password) {
      this.props.dispatch(login(email, password));
    }
  };


  render() {
    const { error, inProgress ,isLoggedin} = this.props.auth;
    if (isLoggedin) {
      return <Redirect to="/"/>
    }
      return (
        <form className="login-form">
          <span className="login-signup-header">Log In</span>
          {error && <div className="alert error-dailog">{error}</div>}
          <div className="field">
            <input
              type="email"
              placeholder="Email"
              required
              // ref={this.emailInputRef}
              onChange={this.handelEmailChange}
              value={this.state.email}
            />
          </div>
          <div className="field">
            <input
              type="password"
              placeholder="Password"
              required
              // ref={this.passwordInputRef}
              onChange={this.handelPasswordChange}
              value={this.state.password}
            />
          </div>
          <div className="field">
            {inProgress ? (
              <button onClick={this.handelFormSummit} disabled={inProgress}>
                Logging in...
              </button>
            ) : (
              <button onClick={this.handelFormSummit} disabled={inProgress}>
                Login
              </button>
            )}
          </div>
        </form>
      );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}
export default connect(mapStateToProps)(Login);
