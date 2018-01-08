import React from 'react';
import { Accounts } from 'meteor/accounts-base';
import PropTypes from 'prop-types';

const Header = (props) => {
  onLogout = () => {
    Accounts.logout();
  };
  return (
    <div>
      <h1>{props.title}</h1>
      <button onClick={this.onLogout}>Logout</button>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
