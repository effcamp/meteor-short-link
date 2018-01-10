import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div className="boxed-view">
    <div className="boxed-view__box">
      <h1>Page Not Found</h1>
      <p>We're unable to find that page.</p>
      <Link to="/" className="btn btn--link">
        Head Home
      </Link>
    </div>
  </div>
);
