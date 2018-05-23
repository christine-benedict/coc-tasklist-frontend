import React, {Component} from 'react'
import {Modal, Button} from 'react-bootstrap'

class EditForm extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <span>
        <Button bsStyle="primary" bsSize="xsmall" onClick={this.handleShow}>
          Edit Notes
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Notes: </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <textarea
              name="notes"
              cols="70"
              rows="10"
              wrap="soft"
            >
              {this.props.notes}
            </textarea>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose} bsSize="sm">Cancel</Button>
            <Button bsStyle="success" bsSize="sm" onClick={this.props.edit}>Save</Button>
          </Modal.Footer>
        </Modal>
      </span>
    );
  }
}

export default EditForm
