import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base';

export default class Signup extends Component {
  state = {
    error: ''
  };

  onSubmit = (e) => {
    e.preventDefault();

    const email = this.refs.email.value.trim();
    const password = this.refs.password.value.trim();

    Accounts.createUser({ email, password }, (err) => {
      if (err) {
        this.setState(() => ({
          error: err.reason
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
        <h1>Join Short Lnk</h1>

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

        <Link to="/">Already have an account?</Link>
      </div>
    );
  }
}
