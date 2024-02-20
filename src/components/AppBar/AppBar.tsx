import React from "react";
import {NavLink} from "react-router-dom";

const AppBar:React.FC = () => {
  return (
    <nav className={"navbar"}>
      <ul className={"nav nav-underline"}>
        <li className={"nav-item"}>
          <NavLink to={"/"} className={"nav-link text-success"}>Home</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default AppBar;