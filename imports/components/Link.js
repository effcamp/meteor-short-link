import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Links } from '../api/links';
import LinksList from './LinksList';
import AddLink from './AddLink';
import Header from './Header';

class Link extends React.Component {
  render() {
    return (
      <div>
        <Header title="Your Links" />
        <LinksList />
        <AddLink />
      </div>
    );
  }
}

export default Link;
