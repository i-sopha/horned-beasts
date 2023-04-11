import './App.css';
import { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Data from './components/data.json';
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
      description: ''
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

// Retruning HTML elements for components
// Main and Selectedbeasts RECEIVING props
// 'this' - instance of App component - can access methods and properties
  render() {
    return (
      <div className="App">

        <Header heading="Magical Horned Beasts" />

        <Main
          data={Data}
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
