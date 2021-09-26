import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Form } from 'react-bootstrap';

class UpdateModel extends React.Component {
  update = (e) => {
    e.preventDefault();
    let selectedItem = {
      id: this.props.item._id,
      title: e.target.title.value,
      imageUrl: e.target.imageUrl.value,
      email: this.props.item.email,

    }
    this.props.update(selectedItem);
    this.props.handleClose();
  }

  render() {
    return (

      <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>update</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.update}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>title</Form.Label>
              <Form.Control type="text" defaultValue={this.props.item.title} name="title" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>imageUrl</Form.Label>
              <Form.Control type="text" defaultValue={this.props.item.imageUrl} name="imageUrl" />
            </Form.Group>
            <Button variant="secondary" type="submit">
              update
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default UpdateModel;
