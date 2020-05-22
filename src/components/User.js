import React from 'react';
import { Link } from 'react-router-dom';

function User(props) {
    
	return (
		<>
		  <Link to='/'>
					<h1 className={props.hideUser ? 'hidden' : 'header'} name='user' onClick={props.paperclipButtonClick}>paperclip</h1>
			</Link>
		</>
	);
}

export default User;
