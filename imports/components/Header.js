import React from 'react';
import { Accounts } from 'meteor/accounts-base';
import PropTypes from 'prop-types';

const Header = (props) => (
  <nav className="header">
    <div className="header__content">
      <h1 className="header__title">{props.title}</h1>
      <button className="btn btn--link-text" onClick={() => Accounts.logout()}>
        Logout
      </button>
    </div>
  </nav>
);

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
