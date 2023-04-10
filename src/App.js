import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header heading="Magical Horned Beasts" />
      <Main />
      <Footer creator="Isabel Sopha"/>
    </div>
  );
}

export default App;