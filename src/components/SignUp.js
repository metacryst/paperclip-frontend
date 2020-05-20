import React from 'react';
import { Link } from 'react-router-dom';

function SignUp(props) {
	return (
		<>
			<Link to='/'>
				<h1 name='signup' onClick={props.paperclipButtonClick}>
					paperclip
				</h1>
			</Link>
			<div className={props.hideTrade ? 'hidden' : 'signup'}>
				<h1>Sign Up</h1>
				<form>
					<input
						onChange={props.handleChange}
						type='text'
						placeholder='Username'
						id='username'
						name='username'
					/>
					<label htmlFor='username'>Username</label>

					<input
						onChange={props.handleChange}
						type='password'
						placeholder='Password'
						id='password'
						name='password'
					/>
					<label htmlFor='password'>Password</label>

					<input
						onChange={props.handleChange}
						type='password'
						placeholder='Confirm password'
						id='passwordConfirm'
						name='confirmPassword'
					/>
					<label htmlFor='passwordConfirm'>Confirm password</label>
					<button onClick={props.runSubmit} type='submit'>
						Sign Up
					</button>
					<p>Passwords must match.</p>
				</form>
			</div>
		</>
	);
}

export default SignUp;
