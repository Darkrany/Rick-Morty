import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from './components/Header';
import Characters from "./components/Characters";
import Details from './components/Details'



function App() {
  return (

    <div className="App">

      <header className="App-header">
          <div className="main"></div>
          <Header/>
          <BrowserRouter>
          <Routes>
            <Route index element={<Characters/>} />
            <Route path="details/:id" element={<Details />} />
          </Routes>
        </BrowserRouter>



      </header>
    </div>
  );
}

export default App;
