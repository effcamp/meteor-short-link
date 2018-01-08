import React, { Component } from 'react';
import { Tracker } from 'meteor/tracker';
import { Meteor } from 'meteor/meteor';
import { Links } from '../api/links';

export class LinksList extends Component {
  state = {
    links: []
  };

  componentDidMount() {
    this.linksTracker = Tracker.autorun(() => {
      Meteor.subscribe('links');

      const links = Links.find().fetch();
      this.setState(() => ({ links }));
    });
  }

  componentWillUnmount() {
    this.linksTracker.stop();
  }

  render() {
    return (
      <div>
        <p className="links">Links List</p>
        <div>
          {this.state.links.map((link) => <p key={link._id}>{link.url}</p>)}
        </div>
      </div>
    );
  }
}

export default LinksList;
