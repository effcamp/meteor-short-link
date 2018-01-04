import React from 'react';

const Link = (props) => {
  return (
    <div>
      <h1>Your Links</h1>
      <button onClick={() => props.history.push('/')}>Logout</button>
    </div>
  );
};

export default Link;
