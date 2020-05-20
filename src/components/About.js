import React from 'react';
import { Link } from 'react-router-dom';

function About(props) {
  return (
    <>
      <Link to='/'>
    			<h1 className={props.hideAbout ? 'hidden' : 'header'} name='about' onClick={props.paperclipButtonClick}>paperclip</h1>
      </Link>
      <div className={props.hideAbout ? 'hidden' : 'about'}>
        <p className="aboutText">trade things. maybe you'll get a house</p>
        <div className="credit">
          <p>designed by Sam Russell, Brian Guayante, and Trent Lehmann 2020.</p>
          <a className="website" href="https://www.samrussell.com/" target="_blank" rel="noopener noreferrer">---> samrussell.com</a>
        </div>
      </div>
    </>
  )
}

export default About