import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { Tracker } from 'meteor/tracker';
import createHistory from 'history/createBrowserHistory';

import Signup from './Signup';
import Link from './Link';
import NotFound from './NotFound';
import Login from './Login';
// import Dashboard from './Dashboard';
const history = createHistory();

const unauthPages = ['/', '/signup'];
const authPages = ['/links'];

const App = () => {
  Tracker.autorun(() => {
    const isAuth = !!Meteor.userId();
    const pathname = history.location.pathname;
    const isUnauthPage = unauthPages.includes(pathname);
    const isAuthPage = authPages.includes(pathname);

    if (isUnauthPage && isAuth) {
      history.replace('/links');
    } else if (isAuthPage && !isAuth) {
      history.replace('/');
    }
  });

  const onEnterPublicPage = () => {
    if (Meteor.userId()) {
      history.replace('links');
    }
  };
  const onEnterPrivatePage = () => {
    if (!Meteor.userId()) {
      history.replace('/');
    }
  };

  return (
    <Router history={history}>
      <div>
        <Switch>
          <Route
            path="/"
            exact
            render={() =>
              Meteor.userId() ? <Redirect to="/links" /> : <Login />
            }
          />
          <Route
            path="/signup"
            component={Signup}
            render={() =>
              Meteor.userId() ? <Redirect to="/links" /> : <Signup />
            }
          />
          <Route
            path="/links"
            component={Link}
            render={() => {
              return !Meteor.userId() ? <Redirect to="/" /> : <Link />;
            }}
          />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
