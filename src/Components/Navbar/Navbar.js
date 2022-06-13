import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from "../../img/grunyons.png";

import "./Navbar.css";

class Navbar extends Component {


  render() {
    return (
      <div>
          
        {/* Regular navigation */}
        <div id="nav">
            <ul id="navigation">
                <li><Link to="/" className='menuItem'>Home</Link></li>
                <li><Link to="/about" className='menuItem'>About</Link></li>
                <Link to="/" id="linkLogo"><img src={logo} id="logo"></img></Link>
                <li><Link to="/music" className='menuItem'>Music</Link></li>
                <li><Link to="/contact" className='menuItem'>Contact</Link></li>
            </ul>
        </div>

      </div>
    )
  }
}

export default Navbar