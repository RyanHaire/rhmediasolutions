import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class RHMediaModal extends React.Component {
  render() {
    return (
      <div>
        <Modal isOpen={this.props.isOpen} toggle={() => this.props.toggle()} className={this.props.className}>
          <ModalHeader toggle={() => this.props.toggle()}>
            {this.props.formSuccess && <p>Success</p>}
            {!this.props.formSuccess && <p>Error</p>}
          </ModalHeader>
          <ModalBody>
            {this.props.formSuccess && <p>Thanks for contacing, we will get back to you as soon as possible!</p>}
            {!this.props.formSuccess && <p>Something went wrong. Please try again or try again later. Thank you.</p>}
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={() => this.props.toggle()}>OK</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
