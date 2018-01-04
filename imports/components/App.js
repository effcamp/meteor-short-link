import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Signup from './Signup';
import Link from './Link';
import NotFound from './NotFound';
import Login from './Login';
// import Dashboard from './Dashboard';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/links" component={Link} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
