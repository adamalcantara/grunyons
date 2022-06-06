import React from 'react'

// import icons
import { FaSpotify } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaItunes } from "react-icons/fa";

const Social = () => {
  return (
    <div>
        
        <a href="https://open.spotify.com/artist/5llELXjQfGt1bHjT9t6cqF" target="_blank" rel="noopener noreferrer"><FaSpotify className="socialicon"/></a>
        <a href="https://m.facebook.com/TheGrunyons/?__tn__=C-R" target="_blank" rel="noopener noreferrer"><FaFacebookF className="socialicon"/></a>
        <a href="https://m.facebook.com/TheGrunyons/?__tn__=C-R" target="_blank" rel="noopener noreferrer"><FaItunes className="socialicon"/></a>
    </div>
  )
}

export default Social