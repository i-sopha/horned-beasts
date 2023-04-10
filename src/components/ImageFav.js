import { Component } from "react";
import Button from 'react-bootstrap/Button';
import { HeartFill } from 'react-bootstrap-icons';

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

export default ImageFav;