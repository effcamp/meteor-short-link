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

    if (password.length < 8) {
      return this.setState(() => ({
        error: 'Password must be longer than 8 characters'
      }));
    }

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
      <div className="boxed-view">
        <div className="boxed-view__box">
          <h1>Join Short Lnk</h1>

          {this.state.error ? <p>{this.state.error}</p> : undefined}

          <form
            onSubmit={this.onSubmit}
            noValidate
            className="boxed-view__form"
          >
            <input type="email" ref="email" name="email" placeholder="Email" />
            <input
              type="password"
              ref="password"
              name="password"
              placeholder="Password"
            />
            <button className="btn">Create account</button>
          </form>

          <Link to="/">Already have an account?</Link>
        </div>
      </div>
    );
  }
}
