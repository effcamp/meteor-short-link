import React, { Component } from 'react';
import { Tracker } from 'meteor/tracker';
import { Meteor } from 'meteor/meteor';
import { Links } from '../api/links';

import LinksListItem from './LinksListItem';

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
        <p>Links List</p>
        <div>
          {this.state.links.map((link) => (
            <LinksListItem
              key={link._id}
              shortUrl={Meteor.absoluteUrl(link._id)}
              {...link}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default LinksList;
