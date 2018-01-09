import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Clipboard from 'clipboard';
import { Meteor } from 'meteor/meteor';

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
      <div>
        <p>Original: {this.props.url}</p>
        <p>ShortLnk: {this.props.shortUrl}</p>
        <p>{this.props.visible.toString()}</p>
        <button ref="copy" data-clipboard-text={this.props.shortUrl}>
          {this.state.copy}
        </button>
        <button
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
  visible: PropTypes.bool.isRequired
};

export default LinksListItem;
