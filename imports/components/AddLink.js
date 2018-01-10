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
        <button onClick={() => this.setState(() => ({ isOpen: true }))}>
          +Add Link
        </button>
        <Modal
          isOpen={this.state.isOpen}
          contentLabel="Add Link"
          ariaHideApp={false}
          onRequestClose={this.handleModalClose}
          className="modal"
          // overlayClassName="modal-overlay"
        >
          <h1>Add Link</h1>
          {this.state.error && <p>{this.state.error}</p>}
          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              placeholder="url"
              autoFocus
              value={this.state.url}
              onChange={(e) => this.onChange(e)}
            />
            <button>Add Link</button>
          </form>
          <button onClick={this.handleModalClose}>Cancel</button>
        </Modal>
      </div>
    );
  }
}
export default AddLink;
