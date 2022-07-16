import React, { Component } from 'react';

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
  };
  render() {
    return (
      <form className="login-form">
        <span className="login-signup-header">Log In</span>
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
          <button onClick={this.handelFormSummit}>Login</button>
        </div>
      </form>
    );
  }
}

export default Login;
