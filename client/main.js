import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../imports/startup/simple-schema-config';

import App from '../imports/components/App';

Meteor.startup(() => {
  ReactDOM.render(<App />, document.getElementById('app'));
});
