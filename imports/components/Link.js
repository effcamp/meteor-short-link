import React from 'react';
import { Accounts } from 'meteor/accounts-base';
import { Links } from '../api/links';
import LinksList from './LinksList';

class Link extends React.Component {
  onSubmit = (e) => {
    const url = this.refs.url.value.trim();
    e.preventDefault();
    if (url) {
      Links.insert({ url });
      this.refs.url.value = '';
    }
  };

  onLogout = () => {
    Accounts.logout();
  };

  render() {
    return (
      <div>
        <h1>Your Links</h1>
        <button onClick={this.onLogout}>Logout</button>
        <LinksList />
        <p>Add Link</p>
        <form onSubmit={this.onSubmit}>
          <input type="text" ref="url" placeholder="url" />
          <button>Add Link</button>
        </form>
      </div>
    );
  }
}

export default Link;
