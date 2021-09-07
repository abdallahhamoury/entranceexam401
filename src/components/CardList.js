import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,Button}from 'react-bootstrap';

class CardList extends React.Component {
    render() {
        console.log('yyyyyyyyyyyyyyyyyyyyy',this.props);
        return (
                <Card style={{ width: '18rem' }}>
                        <Card.Title>{this.props.item.title}</Card.Title>
                    <Card.Img variant="top" src={this.props.item.imageUrl} />
                    <Card.Body>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button onClick={()=>{this.props.addToFav(this.props.item)}} variant="primary">Add To Fav</Button>
                    </Card.Body>
                </Card>
        
        );
    }
}

export default CardList;





