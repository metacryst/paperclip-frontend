import React from 'react';
import { Link } from 'react-router-dom';

function SignIn(props) {
	return (
		<>
			<Link to='/'>
				<h1 name='signin' onClick={props.paperclipButtonClick}>
					paperclip
				</h1>
			</Link>
			<div className={props.hideTrade ? 'hidden' : 'signin'}>
				{' '}
				<h1>Sign In</h1>
				<form>
					<input
						onChange={props.handleChange}
						type='text'
						placeholder='Username'
						id='username'
					/>
					<label htmlFor='username'>Username</label>

					<input
						onChange={props.handleChange}
						type='password'
						placeholder='Password'
						id='password'
					/>
					<label htmlFor='password'>Password</label>
					<button onClick={props.runSubmit} type='submit'>
						Sign Up
					</button>
				</form>
			</div>
		</>
	);
}

export default SignIn;
