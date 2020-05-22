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
						autoComplete="yeeyee"
					/>
					<input
						className="inputBox"
						onChange={props.handleChange}
						type='text'
						placeholder='username'
						id='username'
						name='username'
						autoComplete="yeeyee"
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
					<p className={props.isPasswordValid ? 'hidden' : 'passwordMatch'}>passwords must match!</p>
				</form>
			</div>
		</>
	);
}

export default SignUp;
