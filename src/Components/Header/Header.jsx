import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/imgs/main-logo.svg";
import home from "../../assets/imgs/home-img.svg";
import menu from "../../assets/imgs/menu.svg";

export default function Header() {
  return (
    <div className="header">
      <NavLink to="/">
        <div className="logo-div">
          <img src={logo} alt="" />
        </div>
      </NavLink>

      <ul className="head-ul">
        <NavLink to="/">
          <li className="home">
            <img src={home} alt="home" />
          </li>
        </NavLink>

        <NavLink to="/menu">
          <li>
            <img src={menu} alt="menu" />
          </li>
        </NavLink>

        <NavLink to="/w">
          <li>bom</li>
        </NavLink>
      </ul>
    </div>
  );
}
