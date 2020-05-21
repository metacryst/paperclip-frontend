import React from 'react';
import { Link } from 'react-router-dom';

function SignUp(props) {
	return (
		<>
			<Link to='/'>
				<h1 name='signup' onClick={props.paperclipButtonClick} className={props.hideSignIn ? 'hidden' : 'signupHeader'}>
					paperclip
				</h1>
			</Link>
			<div className={props.hideSignUp ? 'hidden' : 'signup'}>
				<h2>Sign Up</h2>
				<form>
					<label htmlFor='email'>Email</label>
					<input
						onChange={props.handleChange}
						type='text'
						placeholder='email'
						id='email'
						name='email'
					/>
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

					<label htmlFor='passwordConfirm'>Confirm password</label>
					<input
						onChange={props.handleChange}
						type='password'
						placeholder='Confirm password'
						id='passwordConfirm'
						name='confirmPassword'
					/>
					<button onClick={props.runSubmit} type='submit' name="signUp">
						Sign Up
					</button>
					<p className={props.isPasswordValid ? 'hidden' : ''}>Passwords must match!</p>
				</form>
			</div>
		</>
	);
}

export default SignUp;
