import React from 'react';
import { Link } from 'react-router-dom';

function User(props) {
    
	return (
		<>
		  <Link to='/'>
					<h1 className={props.hideUser ? 'hidden' : 'header'} name='user' onClick={props.paperclipButtonClick}>paperclip</h1>
			</Link>
			<div className={props.hideUser ? 'hidden' : 'user'}>
				<Link to='/signup'>
					<h2>sign up</h2>
				</Link>
				<Link to='/signin'>
					<h2>sign in</h2>
				</Link>
			</div>
		</>
	);
}

export default User;
