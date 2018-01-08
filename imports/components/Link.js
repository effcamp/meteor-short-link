import React from 'react';
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
