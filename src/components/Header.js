//react libraries
// import { NavLink } from "react-router-dom";
//components
import logo from "../images/Rick_and_Morty_title_card.png";
//styles
// import "../styles/components/Header.scss";

function Header() {
  return (
    <header className="header">
     
        <img src={logo} alt="Logo Rick and Morty" className="App-logo" />

      <h1 className="header__title"></h1>
    </header>
  );
}

export default Header;
