import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Signup extends Component {
  state = {
    error: ''
  };

  onSubmit = (e) => {
    e.preventDefault();

    this.setState(() => {
      error: 'Something went wrong.';
    });
  };

  render() {
    return (
      <div>
        <h1>Join Short Lnk</h1>

        {this.state.error ? <p>{this.state.error}</p> : undefined}

        <form onSubmit={this.onSubmit}>
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <button>Create account</button>
        </form>

        <Link to="/">Already have an account?</Link>
      </div>
    );
  }
}
