import { Component } from "react";
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/esm/Container";
import ImageFav from './ImageFav';

class HornedBeast extends Component {
  render() {

    return (
        <Container className="mb-3 mt-3">
            <Card style={{ width: '18rem' }} border="danger" borderWidth="20px" className="shadow-lg">
                <Card.Img variant="top" src={this.props.imageUrl} alt={this.props.description} title={this.props.title} />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <ImageFav />
                </Card.Body>
            </Card>
        </Container>
    )
  }

}

export default HornedBeast;