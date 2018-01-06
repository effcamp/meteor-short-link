import React from 'react';
import { Accounts } from 'meteor/accounts-base';

const Link = (props) => {
  onLogout = () => {
    Accounts.logout();
  };

  return (
    <div>
      <h1>Your Links</h1>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default Link;
