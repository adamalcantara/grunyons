import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from "../../img/grunyons.png";

class Navbar extends Component {


  render() {
    return (
      <div>
          
        {/* Regular navigation */}
        <div id="nav">
            <Link to="/" id="linkLogo"><img src={logo}></img></Link>
            <ul id="navigation">
                
            </ul>
        </div>

      </div>
    )
  }
}

export default Navbar