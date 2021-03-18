import React, { Component } from 'react';
import {Link,NavLink} from "react-router-dom"

const NavBar = props => {
    return ( 
    //     <nav className="navbar navbar-dark bg-dark">
    //     <div className="container-fluid">
    //         <a className="navbar-brand" href="#">Navbar</a>
    //         <span className="badge badge-warning">{props.productsCount}</span> 
    //     </div>
    // </nav>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <Link className="navbar-brand" to="#">Navbar</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link " aria-current="page" to="/home">Home</NavLink >
          </li>
          <li className="nav-item">
            <NavLink className="nav-link " aria-current="page" to="/login">Login</NavLink >
          </li>
          <li className="nav-item">
            <NavLink  className="nav-link" aria-current="page" to="/card">Shopping card</NavLink >
          </li>
          <li className="nav-item">
            <NavLink  className="nav-link" to="/contact">Contact</NavLink >
          </li>
          <li className="nav-item">
            <NavLink  className="nav-link" to="/about">About</NavLink >
          </li>
          <span className="badge badge-warning">{props.productsCount}</span> 
        </ul>
      </div>
    </div>
  </nav>
     );
}
 
export default NavBar;
