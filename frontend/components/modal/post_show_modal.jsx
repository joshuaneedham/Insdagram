import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

class PostShowModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalOpen: false };
  }

  // onAfterOpen={this.placeholder}
  // onRequestClose={this.placeholder}
  // closeTimeoutMS={this.placeholder}

  render(){
    return (
      <Modal className="modal"
        isOpen={this.state.modalOpen}
        style={ModalStyle}>
          <h1>modal content</h1>
      </Modal>
    );
  }
}

const ModalStyle = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(0, 0, 0, 0.75)'
  },
  content : {
    position                   : 'fixed',
    top                        : '100px',
    left                       : '100px',
    right                      : '100px',
    bottom                     : '100px',
    border                     : '1px solid #ccc',
    background                 : '#fff',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    outline                    : 'none',
    padding                    : '20px'
  }
};

export default PostShowModal;
