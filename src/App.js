import './App.css';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';

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