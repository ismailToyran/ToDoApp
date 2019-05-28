import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';

import './Modal.css';

class MyModalView extends Component {

  render() {
    return (
      <Modal {...this.props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        keyboard>
        <Modal.Header closeButton >
        <Modal.Title id="contained-modal-title-vcenter">
        <div className="d-flex ml-auto">
            <a href='#tasks' onClick={this.props.handleDelete} onClickCapture={this.props.onHide}><div className="icon-bg text-center" id="delete-icon"></div></a>
            <a href='#tasks' onClick={this.props.handleMoveUp} onClickCapture={this.props.onHide}><div className="icon-bg text-center" id="arrow-up-icon"></div></a>
            <a href='#tasks' onClick={this.props.handleMoveDown} onClickCapture={this.props.onHide}><div className="icon-bg text-center" id="arrow-down-icon"></div></a>
          </div>
        </Modal.Title>
          
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Control
              type="text"
              placeholder="Normal text"
              as="textarea"
              rows="3"
              onChange={this.props.onChange}
              value={this.props.value}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide} >Tamam</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

MyModalView.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}

export default MyModalView;