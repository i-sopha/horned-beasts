import './App.css';
import { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Data from './components/data.json';
import { Form } from 'react-bootstrap';
import SelectedBeasts from './components/SelectedBeasts';
// import HornedBeasts from './components/HornedBeasts';
// Why get an error if HornedBeasts is uncommented?

// Previously was a function that I changed to a component in order to use a constructor function - due to errors

// Initial State objects starting with empty strings to render what I want to be rendered in Modal
// show: determines whether SelectedBeasts component should be displayed, in this case it is NOT shown

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      title: '',
      src: '',
      description: '',
      filteredHorn: Data
    };
  }

// Updates 'show' property from false to true, respectively.
// When an image is clicked from Main.js - the getSelectedMethod(below) is called and updates the 'show' in either 
  handleClose = () => {
    this.setState({
      show: false
    });
  }

  handleOpen = () => {
    this.setState({
      show: true
    });
  }

  // handleClick = () => {
  //   const newStatus = this.state.show === false ? true : false;
  //   this.setState({
  //     show: newStatus
  //   });
  // }

// Updates the state upon click and calls handleOpen to show the SelectedBeasts component
  getSelectedMethod = (title, src, description) => {
    this.setState({
      title: title,
      src: src,
      description: description,
    }); 
    this.handleOpen();
  };

//Filter
  filterNumOfHorns = (event) => {

    event.preventDefault();
    let horns = event.target.value;

    let filterData = Data.filter((item) => {
      if (item.horns === parseInt(horns)) {
        return true;
      } else {
        return false;
      }
    });

    this.setState({
      filteredHorn: filterData
    });
    console.log(filterData);
    console.log(typeof horns);
  };




// Retruning HTML elements for components
// Main and Selectedbeasts RECEIVING props
// 'this' - instance of App component - can access methods and properties
  render() {
    console.log(this.state);
      return (
      <div className="App">

        <Header />

        <Form.Label>Select</Form.Label>
        <Form.Select aria-label="Default select example" onChange={this.filterNumOfHorns} >

          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="100">100</option>
        </Form.Select>

        <Form />

        <Main
          filteredHorn={this.state.filteredHorn}
          handleOpen={this.handleOpen}
          getSelectedMethod={this.getSelectedMethod}
        />

        {/* <HornedBeasts /> */}

        <SelectedBeasts 
          show={this.state.show}
          handleClose={this.handleClose}
          title={this.state.title}
          src={this.state.src}
          description={this.state.description}
        />

        <Footer creator="Isabel Sopha"/>

      </div>
    );
  }
}

export default App;
