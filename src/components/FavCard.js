import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';

class FavCard extends React.Component {
  render() {
    return (
      <>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={this.props.item.imageUrl} />
          <Card.Body>
            <Card.Title>name : {this.props.item.title}</Card.Title>
            <Button variant="primary" onClick={() => { this.props.deleteFav(this.props.item._id) }} >delete</Button>
            <Button variant="primary" onClick={() => { this.props.showUpdateFav(this.props.item) }} >update</Button>
          </Card.Body>
        </Card>
      </>
    )
  }
}

export default FavCard;