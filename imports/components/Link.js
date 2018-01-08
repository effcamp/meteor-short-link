import React from 'react';
import LinksList from './LinksList';
import AddLink from './AddLink';
import Header from './Header';

export default () => (
  <div>
    <Header title="Your Links" />
    <LinksList />
    <AddLink />
  </div>
);
