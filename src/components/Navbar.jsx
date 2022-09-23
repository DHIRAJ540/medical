import React from "react";
import account from "../assets/account.svg";
import "./navbar.css"

const Navbar = () => {
  return (
    <div className="container nav_container">
      <div className="logo">
        <div className="box"></div>
        <h3>Medical Darpan</h3>
      </div>
      <div className="nav_items">
        <h4 className="nav_item">Home</h4>
        <h4 className="nav_item">Products</h4>
        <h4 className="nav_item">Distributors</h4>
        <h4 className="nav_item">Manifacturers</h4>
        <h4 className="nav_item">About us</h4>
        <h4 className="nav_item">Blog</h4>
      </div>
      <div className="log">
        <h4>Login</h4>
        <img src={account} alt="account" />
      </div>
    </div>
  );
};

export default Navbar;
