import React from 'react'

import "./About.css";

import Downtown from "../../img/about/downtown.jpg";
import Trophy from "../../img/about/trophy.jpeg";
import Ale from "../../img/about/ale.jpeg";

const About = () => {
  return (
    <div>
      <p>
      <img src={Downtown} id="downtownImg" alt="The Grunyons in downtown detroit"></img>What do you call a men&#39;s vocal ensemble active in supporting and performing “vocal jazz”, a musical idiom involving the adaptation of instrumental jazz techniques to the rendition of vocal compositions? In southeast Michigan, you can call it the “Grunyons”.In 1949, eight local Yale graduates, yearning to continue the remarkable singing tradition of their university and especially the style of the Yale vocal ensemble, the “Whiffenpoofs”, banded together to form this group. The name “Grunyons” was chosen for reasons now lost to anyone&#39;s specific memory, but the ensemble soon expanded to a more versatile group of sixteen, drawing in men associated with other university musical experiences. The organization has continued since, offering its special brand of a cappella close harmony and entertainment to scores of audiences throughout southeast Michigan and beyond.

      <div className='spacer'></div>

      <img src={Trophy} id="trophyImg" alt="The Grunyons with a trophy"></img>In 1966, the Grunyons began performing at a gathering of similar amateur vocal jazz ensembles called “Spring Sing“. Customarily held in various locations, “Spring Sing” is hosted by various groups in the organization known as the American A Cappella Alliance. “Spring Sing” has been hosted numerous times by The Grunyons, recently in 1997 in Dearborn, MI, in 2004 at Walt Disney World in FL, and in 2013 in Detroit, MI. Groups involved now represent about a dozen locations, from a far west as Denver Colorado.

      <div className='spacer'></div>

      In 1978, the Grunyons felt the need to formalize their organization in order to support and sponsor vocal jazz activities in Michigan beyond their own avocational pursuits. TheMichigan Vocal Jazz Society, a Michigan non-profit corporation, was formed to implement a variety of related functions, from hosting appearances of luminaries like the Kings Singers or the Swingle Singers, to conducting vocal jazz workshops for educational purposes.

      <div className='spacer'></div>

      Vocal jazz usually incorporates rhythm patterns, melodic variations and harmonic treatments which may modify the original composition and reflect similar techniques first used by both black and white musicians beginning early in the 20th century. Through the jazz interpretations of Billie Holliday, Ella Fitzgerald and countless others, vocal groups began to develop ensemble styles which emulated these unusual musical presentations. The pattern of vocal styling made popular by the Modernaires, the Four Freshmen and the Hi-Los now infuses the music of currently popular groups like Manhattan Transfer and Take 6 with excitement and innovation.

      <div className='spacer'></div>

      <img src={Ale} id="aleImg" alt="The Grunyons with Pale Ale"></img>The Grunyons are now into their “middle ages”, alumni of some ten other colleges, an age range of almost exactly seventy years, several new vocal arrangements to update an extensive repertoire, and an enthusiasm for life and music which some say defies description. Perhaps it was best summed up in an introduction by a young student leader at a school assembly who was “happy to present the Grunyons, a bunch of middle-aged businessmen who really love to sing.”

      <div className='spacer'></div>

      By the end of the forty minute program, the enthusiastic audience knew their emcee had spoken the truth.
      </p>
    </div>
  )
}

export default About