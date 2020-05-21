import React from 'react';
import { Link } from 'react-router-dom';

function SignIn(props) {
	return (
		<>
			<Link to='/'>
				<h1 name='signin' onClick={props.paperclipButtonClick} className={props.hideSignIn ? 'hidden' : 'signinHeader'}>
					paperclip
				</h1>
			</Link>
			<div className={props.hideSignIn ? 'hidden' : 'signin'}>
				<h2>Sign In</h2>
				<form>
					<label htmlFor='username'>Username</label>
					<input
						onChange={props.handleChange}
						type='text'
						placeholder='Username'
						id='username'
						name='username'
					/>
					
					<label htmlFor='password'>Password</label>
					<input
						onChange={props.handleChange}
						type='password'
						placeholder='Password'
						id='password'
						name='password'
					/>
					
					<button onClick={props.checkSubmit} type='submit' name='signIn'>
						Sign In
					</button>
					<p className={props.isUserFound ? 'hidden' : ''}>User not found!</p>
				</form>
			</div>
		</>
	);
}

export default SignIn;
