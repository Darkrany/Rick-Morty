import logo from './logo.svg';
import './App.css';
import Characters from "./components/Characters";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Characters/>
        </p>

      </header>
    </div>
  );
}

export default App;
