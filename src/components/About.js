import React from 'react';

function About(props) {
  return (
    <>
      <a href=''>
    			<h1 className={props.hideAbout ? 'hidden' : 'header'} name='about' onClick={props.paperclipButtonClick}>paperclip</h1>
    	</a>
      <div className={props.hideAbout ? 'hidden' : 'about'}>
        <p className="aboutText">trade things. maybe you'll get a house</p>
        <div className="credit">
          <p>designed by Sam Russell, Brian Guayante, and Trent  2020.</p>
          <a className="website" href="https://www.samrussell.com/" target="_blank" rel="noopener noreferrer">---> samrussell.com</a>
        </div>
      </div>
    </>
  )
}

export default About