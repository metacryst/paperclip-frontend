import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';



function User(props) {
    
	return (
		<>
			<div className={props.hideUser ? 'hidden' : 'user'}>
				<p>Hello</p>
				<Link to='/'>
					<h1 className='header'>paperclip</h1>
				</Link>
			</div>
		</>
	);
}

export default User;
