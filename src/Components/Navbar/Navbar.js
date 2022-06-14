import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from "../../img/grunyons.png";

import "./Navbar.css";

class Navbar extends Component {
  // set state to false
  state={ clicked: false }


  handleClick= () => {
    this.setState({ clicked: !this.state.clicked })
  }

  render() {
    return (
      <div>

        <div id="mobileNav">

          <div id="mobileNavPieces">
            <div>
              <img src={logo} id="logosmall" alt="logo"></img>
            </div>

            <div id="burger" onClick={this.handleClick}>
                  <div id="line1" className={this.state.clicked ? 'line1click' : ''}></div>
                  <div id="line2" className={this.state.clicked ? 'line2click' : ''}></div>
                  <div id="line3" className={this.state.clicked ? 'line3click' : ''}></div>
            </div>
          </div>

          <div className={this.state.clicked ? 'navbar active' : 'navbar'}>
              <Link to="/" className='navlinks' onClick={this.handleClick}>Home</Link>
              <Link to="/about" className='navlinks' onClick={this.handleClick}>About</Link>
              <Link to="/music" className='navlinks' onClick={this.handleClick}>Music</Link>
              <Link to="/contact" className='navlinks' onClick={this.handleClick}>Contact</Link>
          </div>
        </div>
          
        {/* Regular navigation */}
        <div id="nav">
            <ul id="navigation">
                <li><Link to="/" className='menuItem'>Home</Link></li>
                <li><Link to="/about" className='menuItem'>About</Link></li>
                <Link to="/" id="linkLogo"><img src={logo} id="logo" alt="logo"></img></Link>
                <li><Link to="/music" className='menuItem'>Music</Link></li>
                <li><Link to="/contact" className='menuItem'>Contact</Link></li>
            </ul>
        </div>

      </div>
    )
  }
}

export default Navbar