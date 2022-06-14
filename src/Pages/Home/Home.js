import React from 'react';

import CarouselComponent from '../../Components/CarouselComponent/CarouselComponent';

import "./Home.css"

const Home = () => {
  return (
    <div id="home">
      <CarouselComponent />
      <p id="introParagraph">"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>

    <div id="linkSection">
      
      <div id="spotify" className='links'>
          <a href='https://open.spotify.com/artist/5llELXjQfGt1bHjT9t6cqF' target="_blank" rel="noopener noreferrer">
            <div className='overlay'>Spotify</div>
          </a>
      </div>

      <div id="facebook" className='links'>
          <a href='https://open.spotify.com/artist/5llELXjQfGt1bHjT9t6cqF' target="_blank" rel="noopener noreferrer">
            <div className='overlay'>Facebook</div>
          </a>
      </div>
    </div>

    </div>
    
  )
}

export default Home