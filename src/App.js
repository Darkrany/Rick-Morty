import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Characters from "./components/Characters";



function App() {
  return (

    <div className="App">

      <header className="App-header">
          <div className="main"></div>
          <Header/>
          <Characters/>


      </header>
    </div>
  );
}

export default App;
