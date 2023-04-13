import { Component } from "react";
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/esm/Container";
import ImageFav from './ImageFav';


class HornedBeasts extends Component {
  render() {
    console.log(this.props);
    return (

      <Container className="mt-3 mb-3">
        <Card style={{ width: '18rem' }} border="danger" className="shadow-lg">

          <Card.Img 
            variant="top" 
            src={this.props.imgUrl} 
            alt={this.props.description} 
            title={this.props.title} 
            onClick={() => this.props.getSelectedMethod(
              this.props.title, 
              this.props.imgUrl, 
              this.props.description
            )} 
            style={{cursor: "pointer"}}
          />

          <Card.Body>
              <Card.Title>{this.props.title}</Card.Title>
              <ImageFav />
          </Card.Body>

        </Card>
      </Container>

    )
  }

}

export default HornedBeasts;
