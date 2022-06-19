import React from 'react'

// import CSS
import "./Spotify.css";

const Spotify = () => {
  return (
    <div>
        <p id="spotifyHeader">The Grunyons' 50th Anniversary Album "Just In Time is available on Spotify and Apple Music.</p>

        {/* embedded Spotify player */}
                <iframe src="https://open.spotify.com/embed/artist/5llELXjQfGt1bHjT9t6cqF?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                title='Spotify Player'
                id="spotifyPlayer"
                ></iframe>
    </div>
  )
}

export default Spotify