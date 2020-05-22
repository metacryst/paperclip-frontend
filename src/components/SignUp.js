import React from 'react';
import { Link } from 'react-router-dom';

function SignUp(props) {
	return (
		<>
			<div className={props.hideSignUp ? 'hidden' : 'signUp'}>
				<form>
					<input
						className="inputBox"
						onChange={props.handleChange}
						type='text'
						placeholder='email'
						id='email'
						name='email'
						autoComplete="none"
					/>
					<input
						className="inputBox"
						onChange={props.handleChange}
						type='text'
						placeholder='username'
						id='username'
						name='username'
						autoComplete="none"
					/>

					<input
						className="inputBox"
						onChange={props.handleChange}
						type='password'
						placeholder='password'
						id='password'
						name='password'
					/>

					<input
						className="inputBox"
						onChange={props.handleChange}
						type='password'
						placeholder='password'
						id='passwordConfirm'
						name='confirmPassword'
					/>
					<button className="signUpButton" onClick={props.checkSubmit} type='submit' name="signUp">
						===>
					</button>
					<p className={props.isPasswordValid ? 'hidden' : ''}>Passwords must match!</p>
				</form>
			</div>
		</>
	);
}

export default SignUp;
