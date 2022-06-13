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
            <Link to="/" id="linkLogo"><img src={logo} id="logo"></img></Link>
            <ul id="navigation">
                <li><Link to="/" className='menuItem'>Home</Link></li>
                <li><Link to="/about" className='menuItem'>About</Link></li>
                <li><Link to="/contact" className='menuItem'>Contact</Link></li>
                <li><a href="https://m.facebook.com/TheGrunyons/?__tn__=C-R" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                <li><a href="https://open.spotify.com/artist/5llELXjQfGt1bHjT9t6cqF" target="_blank" rel="noopener noreferrer">Spotify</a></li>
            </ul>
        </div>

      </div>
    )
  }
}

export default Navbar