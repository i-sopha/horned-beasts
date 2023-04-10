import { Component } from "react";
import Button from 'react-bootstrap/Button';
import { HeartFill } from 'react-bootstrap-icons';
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/esm/Container";

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


class ImageFav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timesClicked: 0
    }
  }

  handleClick = () => {
    let addClick = this.state.timesClicked + 1;
    this.setState({
      timesClicked: addClick
    })

  }

  render() {
    return (
      <Button onClick={this.handleClick} variant='danger'><HeartFill></HeartFill> <span>Favorite: {this.state.timesClicked}</span></Button>
    )
  }


}

export default HornedBeast;