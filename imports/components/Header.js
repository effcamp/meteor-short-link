import React from 'react';

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

export default Header;
