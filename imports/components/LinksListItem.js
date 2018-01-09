import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Clipboard from 'clipboard';

export class LinksListItem extends Component {
  componentDidMount() {
    this.clipboard = new Clipboard(this.refs.copy);
    this.clipboard
      .on('success', () => {
        alert('it worked!');
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
        <button ref="copy" data-clipboard-text={this.props.shortUrl}>
          Copy
        </button>
      </div>
    );
  }
}

LinksListItem.propsTypes = {
  _id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  shortUrl: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired
};

export default LinksListItem;
