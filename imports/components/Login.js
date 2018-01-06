import React from 'react';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';

class Login extends React.Component {
  state = {
    error: ''
  };

  onSubmit = (e) => {
    e.preventDefault();

    const email = this.refs.email.value.trim();
    const password = this.refs.password.value.trim();

    Meteor.loginWithPassword({ email }, password, (err) => {
      if (err) {
        this.setState(() => ({
          error: 'Unable to login. Check email and password'
        }));
      } else {
        this.setState(() => ({
          error: ''
        }));
      }
    });
  };

  render() {
    return (
      <div>
        <h1>Short Lnk</h1>

        {this.state.error ? <p>{this.state.error}</p> : undefined}

        <form onSubmit={this.onSubmit}>
          <input type="email" ref="email" name="email" placeholder="Email" />
          <input
            type="password"
            ref="password"
            name="password"
            placeholder="Password"
          />
          <button>Create account</button>
        </form>
        <Link to="/signup">Don't have an account?</Link>
      </div>
    );
  }
}

export default Login;
