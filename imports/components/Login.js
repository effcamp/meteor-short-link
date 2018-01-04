import React from 'react';
import { Link } from 'react-router-dom';

const Login = (props) => {
  return (
    <div>
      <h1>Login Here</h1>
      {/* login form here */}
      <Link to="/signup">Don't have an account?</Link>
    </div>
  );
};

export default Login;
