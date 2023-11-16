import React from 'react';
import { NavLink } from "react-router-dom";

import logo from "../images/Rick_and_Morty_title_card.png";


function Header() {
  return (
    <header className="header">
    <NavLink to="/">
    <img src={logo} alt="Logo Rick and Morty" className="App-logo" /> 
     </NavLink>
    </header>
  );
}

export default Header;
