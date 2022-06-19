import React from 'react';

import "./YouTube.css";

const YouTube = () => {
  return (
    <div>
        <p id="youtubeHeader">During lockdown in 2020, The Grunyons recorded a series of "stay at home" videos. Check them out below.</p>


        {/* Container for embedded YouTube video */}
        <div id="videoContainerAll">
            <div className='videoContainer'>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/lie660HNNzI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>     
            </div>
            <div className='videoContainer'>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Oz7GEfHjpSs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            <div className='videoContainer'>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/lR5iYxpb4ag" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    </div>
  )
}

export default YouTube