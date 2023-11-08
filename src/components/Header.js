//react libraries
// import { NavLink } from "react-router-dom";

import logo from "../images/Rick_and_Morty_title_card.png";


function Header() {
  return (
    <header className="header">
     
        <img src={logo} alt="Logo Rick and Morty" className="App-logo" />

    </header>
  );
}

export default Header;
