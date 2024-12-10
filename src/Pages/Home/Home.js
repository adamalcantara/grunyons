import React, {useState} from 'react';

import CarouselComponent from '../../Components/CarouselComponent/CarouselComponent';

import "./Home.css"

import poster from "../../img/2022christmas.jpg";
import Upcoming from '../../Components/Upcoming/Upcoming';

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  }

  return (
    <div id="home">
      <CarouselComponent />
      {/* <p id="introParagraph">The Grunyons are a Michigan</p> */}

      {/* <Upcoming /> */}


      
    {/* Section for links on the homepage */}
    <div id="linkSection">
      
      <div id="spotify" className='links'>
          <a href='https://open.spotify.com/artist/5llELXjQfGt1bHjT9t6cqF' target="_blank" rel="noopener noreferrer">
            <div className='overlay'>Spotify</div>
          </a>
      </div>

      <div id="facebook" className='links'>
          <a href='https://www.facebook.com/TheGrunyons/' target="_blank" rel="noopener noreferrer">
            <div className='overlay'>Facebook</div>
          </a>
      </div>

      <div id="itunes" className='links'>
          <a href='https://music.apple.com/us/artist/the-grunyons/1598754272' target="_blank" rel="noopener noreferrer">
            <div className='overlay'>iTunes</div>
          </a>
      </div>

      <div id="youtube" className='links'>
          <a href='https://www.youtube.com/user/Grunyons/videos' target="_blank" rel="noopener noreferrer">
            <div className='overlay'>YouTube</div>
          </a>
      </div>


    </div>
    </div>
    
  )
}

export default Home