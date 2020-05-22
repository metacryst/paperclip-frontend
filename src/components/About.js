import React from 'react';
import { Link } from 'react-router-dom';

function About(props) {
  return (
    <>
      <Link to='/'>
    			<h1 className={props.hideAbout ? 'hidden' : 'header'} name='about' onClick={props.paperclipButtonClick}>paperclip</h1>
      </Link>
      <p id="c1" className={props.hideAbout ? 'hidden' : 'credits'}>© Sam Russell, Brian Guayante, and Trent Lehmann 2020.</p>
      <p id="c2" className={props.hideAbout ? 'hidden' : 'credits'}>© Sam Russell, Brian Guayante, and Trent Lehmann 2020.</p>
      <p id="c3" className={props.hideAbout ? 'hidden' : 'credits'}>© Sam Russell, Brian Guayante, and Trent Lehmann 2020.</p>
      <p id="c4" className={props.hideAbout ? 'hidden' : 'credits'}>© Sam Russell, 
      Brian Guayante, and Trent Lehmann 2020.</p>
      <p id="c5" className={props.hideAbout ? 'hidden' : 'credits'}>© Sam Russell, 
      Brian Guayante, and Trent Lehmann 2020.</p>
      <p id="c6" className={props.hideAbout ? 'hidden' : 'credits'}>© Sam Russell, 
      Brian Guayante, and Trent Lehmann 2020.</p>
      <p id="c7" className={props.hideAbout ? 'hidden' : 'credits'}>© Sam Russell, 
      Brian Guayante, and Trent Lehmann 2020.</p>
      <p id="c8" className={props.hideAbout ? 'hidden' : 'credits'}>© Sam Russell, 
      Brian Guayante, and Trent Lehmann 2020.</p>
      <p id="c9" className={props.hideAbout ? 'hidden' : 'credits'}>© Sam Russell, 
      Brian Guayante, and Trent Lehmann 2020.</p>
      <p id="c10" className={props.hideAbout ? 'hidden' : 'credits'}>© Sam Russell, 
      Brian Guayante, and Trent Lehmann 2020.</p>
      <p id="c11" className={props.hideAbout ? 'hidden' : 'credits'}>© Sam Russell, 
      Brian Guayante, and Trent Lehmann 2020.</p>
      <p className={props.hideAbout ? 'hidden' : 'tradeHouse'}>TRADE THINGS, MAYBE YOU'LL GET A HOUSE.</p>
      <div className={props.hideAbout ? 'hidden' : 'about'}>
        <div className="aboutText">
    
          <a className="website" href="https://www.samrussell.com/" target="_blank" rel="noopener noreferrer">---> samrussell.com</a>
        </div>
      </div>
    </>
  )
}

export default About