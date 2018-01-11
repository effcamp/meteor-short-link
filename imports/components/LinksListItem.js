import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Clipboard from 'clipboard';
import { Meteor } from 'meteor/meteor';
import moment from 'moment';

export class LinksListItem extends Component {
  state = {
    copy: 'copy'
  };
  componentDidMount() {
    this.clipboard = new Clipboard(this.refs.copy);
    this.clipboard
      .on('success', () => {
        this.setState(() => ({ copy: 'copied' }));
        setTimeout(() => this.setState(() => ({ copy: 'copy' })), 1000);
      })
      .on('error', () => {
        alert('not working!');
      });
  }
  componentWillUnmount() {
    this.clipboard.destroy();
  }

  render() {
    return (
      <div className="links">
        <h2>{this.props.url}</h2>
        <p className="links__message">{this.props.shortUrl}</p>
        <p className="links__message">
          {this.props.visitedCount === 1
            ? `${this.props.visitedCount} visit`
            : `${this.props.visitedCount} visits`}{' '}
          {this.props.lastVisitedAt &&
            `(visited ${moment(this.props.lastVisitedAt).fromNow()})`}
        </p>
        <a
          href={this.props.shortUrl}
          target="_blank"
          className="btn btn--pill btn--link"
        >
          Visit
        </a>
        <button
          ref="copy"
          data-clipboard-text={this.props.shortUrl}
          className="btn btn--pill"
        >
          {this.state.copy}
        </button>
        <button
          className="btn btn--pill"
          onClick={() =>
            Meteor.call(
              'links.setVisibility',
              this.props._id,
              !this.props.visible
            )
          }
        >
          {this.props.visible ? 'Hide' : 'Show'}
        </button>
      </div>
    );
  }
}

LinksListItem.propTypes = {
  _id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  shortUrl: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  visitedCount: PropTypes.number.isRequired,
  lastVisitedAt: PropTypes.number
};

export default LinksListItem;
