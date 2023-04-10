import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer creator={"Isabel Sopha"} />
    </div>
  );
}

export default App;