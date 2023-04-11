import { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import HornedBeasts from './HornedBeasts';

// data prop is passed down from parent component which is App.js - instead of importing it directly here we just grab from parent since parent component needs it there as well ?
// Using a constructor allows us to easily set the initial state object based on props received from a parent component.
// Could we still import data.json without using props ? so instead we would put 'data: {Data}' ? 
class Main extends Component {

  constructor(props) {
      super(props);
      this.state = {
          data: this.props.data,
      };
  }


  // map() METHOD is used to loop over objects created from HornedBeasts
  // arrow function expression being used as a callback function
  // this.state.data is what we want to iterate - taking in a 'beast' argument
  // returns each element in the array

  // The key prop is used to uniquely identify each Col component in the React virtual DOM.
  // The key prop is necessary for when rendering a list of elements using map()

  // The handleOpen and getSelectedMethod props are also passed to the HornedBeasts component and are methods defined in the parent component - App - that can be used to update its state.
  
  render() {
      return (
        <Container>
            <Row>
                {this.state.data.map(beast => {
                    return (
                        <Col xs={4} key={beast.title}>
                            <HornedBeasts 
                                title={beast.title}
                                imgUrl={beast.image_url}
                                description={beast.description}
                                handleOpen={this.props.handleOpen}
                                getSelectedMethod={this.props.getSelectedMethod}
                            />
                        </Col>
                    )
                })}
            </Row>
        </Container>
      );
  }
}

export default Main;
