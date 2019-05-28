import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';

class MyModalSubmit extends Component {

  render() {
    return (
      <Modal {...this.props}
             size="md"
             aria-labelledby="contained-modal-title-vcenter"
             centered
             keyboard>
        <Modal.Header closeButton onClick={this.props.onClose}>
          <Modal.Title id="contained-modal-title-vcenter">Yeni Görev Ekle</Modal.Title>
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
          <Button onClick={this.props.onSubmit} >Ekle</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

MyModalSubmit.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default MyModalSubmit;