import React from 'react';
import Logo from "../../img/grunyons.png";

import "./LandingPage.css";

// import social media bar
import Social from "../../Components/Social/Social"

const LandingPage = () => {
  return (
    <div id="socialPage">

        <img src={Logo} id="grunyonLogo"></img>
        <h2 id="soon">New website coming soon.</h2>

        <Social />

    </div>
  )
}

export default LandingPage