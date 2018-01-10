import React from 'react';
import { Meteor } from 'meteor/meteor';
import Modal from 'react-modal';

class AddLink extends React.Component {
  state = {
    url: '',
    isOpen: false,
    error: ''
  };

  onSubmit = (e) => {
    const { url } = this.state;

    e.preventDefault();
    Meteor.call('links.insert', url, (err, res) => {
      if (!err) {
        this.handleModalClose();
      } else {
        this.setState(() => ({ error: err.reason }));
      }
    });
  };
  onChange = (e) => {
    this.setState({ url: e.target.value });
  };
  handleModalClose = () => {
    this.setState(() => ({ isOpen: false, url: '', error: '' }));
  };

  render() {
    return (
      <div>
        <button
          onClick={() => this.setState(() => ({ isOpen: true }))}
          className="btn"
        >
          +Add Link
        </button>
        <Modal
          isOpen={this.state.isOpen}
          contentLabel="Add Link"
          ariaHideApp={false}
          onRequestClose={this.handleModalClose}
          className="boxed-view__box"
          overlayClassName="boxed-view boxed-view--modal"
        >
          <h1>Add Link</h1>
          {this.state.error && <p>{this.state.error}</p>}

          <form onSubmit={this.onSubmit} className="boxed-view__form">
            <input
              type="text"
              placeholder="url"
              autoFocus
              value={this.state.url}
              onChange={(e) => this.onChange(e)}
            />
            <button className="btn">Add Link</button>
            <button
              onClick={this.handleModalClose}
              className="btn btn--secondary"
              type="button"
            >
              Cancel
            </button>
          </form>
        </Modal>
      </div>
    );
  }
}
export default AddLink;
