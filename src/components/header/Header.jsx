import React from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import {CgShoppingBag} from 'react-icons/cg'
const Header = () => {
  return (
    <div className="container">
      <div className="logo">
        <img src={logo} alt="" />
        <span>SkinCare</span>
      </div>

      <div className="right">
        <div className="menu">
          <ul className="menu">
            <li>Collections</li>
            <li>Brands</li>
            <li>New</li>
            <li>Sales</li>
            <li>ENG</li>
          </ul>
        </div>
        <input type="text" className="search" placeholder="search" />
     <CgShoppingBag className='cart'/>
      </div>
    </div>
  );
};

export default Header;
