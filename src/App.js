import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';

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