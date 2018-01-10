import React, { Component } from 'react';
import { Tracker } from 'meteor/tracker';
import { Meteor } from 'meteor/meteor';
import { Links } from '../api/links';
import { Session } from 'meteor/session';

import LinksListItem from './LinksListItem';

export class LinksList extends Component {
  state = {
    links: [],
    visible: false
  };

  componentDidMount() {
    this.linksTracker = Tracker.autorun(() => {
      Meteor.subscribe('links');

      const links = Links.find({
        visible: !this.state.visible
      }).fetch();
      this.setState(() => ({ links }));
    });
  }

  componentWillUnmount() {
    this.linksTracker.stop();
  }

  handleCheck = (e) => {
    this.setState(() => ({ visible: !this.state.visible }));
    const links = Links.find({
      visible: this.state.visible
    }).fetch();
    this.setState(() => ({ links }));
  };

  render() {
    return (
      <div>
        <label>
          <input
            type="checkbox"
            defaultChecked={this.state.visible}
            onChange={this.handleCheck}
          />
          Show hidden links
        </label>

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
