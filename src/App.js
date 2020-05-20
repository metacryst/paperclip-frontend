import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Route, Link, useHistory } from 'react-router-dom';
import './App.css';

import Users from './components/data/Users.js';
import Categories from './components/data/Categories.js';
import Items from './components/data/Items.js';
import Needs from './components/data/Needs.js';
import Tiers from './components/data/Tiers.js';
import Links from './components/data/Links.js';
import SignIn from './components/SignIn'
import SignUp from './components/SignUp';

import About from './components/About.js';
import Trade from './components/Trade.js';
import User from './components/User.js';

function App() {
	// hooks for api calls
	const [usersData, setUsersData] = useState([]);
	const [apiLink, setApiData] = useState([]);
	const [error, setError] = useState('');

	// hooks for the display of every component in nav menu
  const [hideUser, setHideUser] = useState(true);
  const [hideSignIn, setHideSignIn] = useState(true)
  const [hideSignUp, setHideSignUp] = useState(true)
  const [hideAbout, setHideAbout] = useState(true);
  const [hideTrade, setHideTrade] = useState(true);
	
	// hooks for login and sign up
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('');
	const [confirmPassword, setconfirmPassword] = useState('');
	
	//hook for storing current user info
	const [userId, setUserId] = useState('');

	//hook for display of the nav menu itself
  const [hideNav, setHideNav] = useState(false)

	
	
	// function to handle display for each url
	const history = useHistory()

	useEffect(() => {
	  return history.listen(location => {
			// console.log(location.pathname);
			// console.log('useffecting');
			
			
	    // eslint-disable-next-line default-case
	    switch (location.pathname) {
				case '/':
					setHideUser(true)
					setHideAbout(true)
					setHideTrade(true)
					setHideSignUp(true)
					setHideSignIn(true)
					setHideNav(false)
					break;
					
				case '/user':
					setHideUser(false)
					setHideNav(true)
					break;
					
				case '/about':
					setHideAbout(false)
					setHideNav(true)
					break;
					
				case '/trade':
					setHideTrade(false)
					setHideNav(true)
					break;
					
				case '/signin':
					setHideUser(true);
					setHideNav(true);
					setHideSignIn(false);
					break;
					
				case '/signup':
					setHideUser(true)
					setHideNav(true)
					setHideSignUp(false)
					break;
			}
	  })
	}, [history])
	
	
	// BUG WORKAROUND FOR DEPLOYMENT, REFRESH CHANGES STATE
	// window.onload = (() => {
	// 	console.log('window onloading');
	// 	if(window.location.pathname != '/') {
	// 		window.location.assign('/')
	// 	}
	// })

  function cornerButtonClick (event) {    
      if(event.target.getAttribute('name') === 'user') {
        setHideUser(false)
        setHideNav(true)
        console.log(hideUser);
      }
      if(event.target.getAttribute('name') === 'about') {
        setHideAbout(false)
        setHideNav(true)
        console.log(hideUser);
      }
      if(event.target.getAttribute('name') === 'trade') {
        setHideTrade(false)
        setHideNav(true)
        console.log(hideUser);
      }
  }
	
	// function to handle home button click
  function paperclipButtonClick (event) {
    if(event.target.getAttribute('name') === 'user') {
      setHideUser(true)
      setHideNav(false)
    }
    if(event.target.getAttribute('name') === 'about') {
      setHideAbout(true)
      setHideNav(false)
    }
    if(event.target.getAttribute('name') === 'trade') {
      setHideTrade(true)
      setHideNav(false)
    }
  }

  // Sign in/ Sign Up
function handleChange (event) {
	// eslint-disable-next-line default-case
	// console.log('handling change');
	
	switch (event.target.name){
		case 'email':
			setEmail(event.target.value)
			break;
		case 'username':
			setUsername(event.target.value)
			break;
		case 'password':
			setPassword(event.target.value)
			break;
		case 'confirmPassword':
			setconfirmPassword(event.target.value)
			break;
		
	}
}

let signUpInformation
let signInInformation

function runSubmit(event){
	event.preventDefault()
	
	signUpInformation = {
		email: email,
		userName: username,
		password: password
	}
	signInInformation = {
		userName: username,
		password: password
	}
	console.log(signInInformation)
	
	switch(event.target.name) {
		case 'signUp':
			signUp()
			break;
		case 'signIn':
			signIn()
			break;
	}
}

// SIGN UP AND SIGN IN FUNCTIONS

const [postId, setPostId] = useState('');

function signUp (body) {
	// POST request using fetch inside useEffect React hook	
	console.log('signing up');
	
	const requestOptions = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(signUpInformation),
	};
	
	console.log(requestOptions)
	let userId = ''
	
	fetch('http://localhost:8080/api/user', requestOptions)
		.then((response) => response.json())
		.then((data) => {
			console.log(data)
			setPostId(data.id)})
		.then(() => {
			setEmail('')
			setUsername('')
			setPassword('')
			setconfirmPassword('')
			setUserId(userId)
		})
	
}

function signIn (body) {
	// POST request using fetch inside useEffect React hook	
	const requestOptions = {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(signInInformation),
	};
	
	console.log(requestOptions)
	let userId = ''
	
	fetch(`http://localhost:8080/api/user/${username}/signin`, requestOptions)
		.then((response) => response.json())
		.then((data) => {
			console.log(data)
			setPostId(data.id)})
		.then(() => {
			setEmail('')
			setUsername('')
			setPassword('')
			setconfirmPassword('')
			setUserId(userId)
		})
	
}


	//API CALL
	function getUsersData() {
		const url = `http://localhost:8080/api/${apiLink}`;
		console.log(apiLink);

		fetch(url)
			.then((response) => response.json())
			.then((response) => {
				setUsersData(response);
			})
			.catch(function (error) {
				setError(error);
			});
	}

	// display api data by loading into state
	function navButtonClick(event) {
		setApiData(event.target.getAttribute('name'));
	}

	return (
		<div className='wrapper' id='grad'>
			<main>
				<div className="graphicHolder">
					<p className="graphic">=======<br></br>=====</p>
				</div>
				<Route
					path='/'
					// exact={true}
					render={() => {
						return (
							<>
								<div className={hideNav ? 'hidden' : ''}>
									<Link to='/'>
										<h1 className='header' name='header'>
											paperclip//
										</h1>
									</Link>
									<Link to='/trade'>
										<h2
											onClick={cornerButtonClick}
											className='trade'
											name='trade'>
											trade
										</h2>
									</Link>
									<Link to='/about'>
										<h2
											onClick={cornerButtonClick}
											className='about'
											name='about'>
											about
										</h2>
									</Link>
									<Link to='/user'>
										<h2
											onClick={cornerButtonClick}
											className='user'
											name='user'>
											user
										</h2>
									</Link>
								</div>
							</>
						);
					}}
				/>
				<Route
					path='/user'
					render={() => {
						return (
							<>
								<User
									hideUser={hideUser}
									paperclipButtonClick={paperclipButtonClick}
								/>
							</>
						);
					}}
				/>
				<Route
					path='/trade'
					render={() => {
						return (
							<>
								<Link to='/'>
									<h1 className='header'>paperclip</h1>
								</Link>
								<Trade />
							</>
						);
					}}
				/>
				<Route
					path='/about'
					render={() => {
						return (
							<>
								<Link to='/'>
									<h1 className='header'>paperclip</h1>
								</Link>
								<About />
							</>
						);
					}}
				/>
				<Route
					path='/signin'
					render={() => {
						return (
							<>
								<SignIn handleChange={handleChange} runSubmit={runSubmit} hideSignIn={hideSignIn} />
							</>
						);
					}}
				/>
				<Route
					path='/signup'
					render={() => {
						return (
							<>
								<SignUp handleChange={handleChange} runSubmit={runSubmit} hideSignUp={hideSignUp}/>
							</>
						);
					}}
				/>
				<Route
					path='/data'
					exact={true}
					render={() => {
						return (
							<>
								<Link to='/users'>
									<h2 className='users' onClick={navButtonClick} name='user'>
										users
									</h2>
								</Link>
								<Link to='/tiers'>
									<h2 className='tiers' onClick={navButtonClick} name='tier'>
										tiers
									</h2>
								</Link>
								<Link to='/categories'>
									<h2
										className='categories'
										onClick={navButtonClick}
										name='category'>
										categories
									</h2>
								</Link>
								<Link to='/items'>
									<h2 className='items' onClick={navButtonClick} name='item'>
										items
									</h2>
								</Link>
								<Link to='/needs'>
									<h2 className='needs' onClick={navButtonClick} name='need'>
										needs
									</h2>
								</Link>
								<Link to='/links'>
									<h2 className='links' onClick={navButtonClick} name='link'>
										links
									</h2>
								</Link>
							</>
						);
					}}
				/>

				<Route
					path='/users'
					render={() => {
						return (
							<>
								<Link to='/'>
									<h1 className='header'>paperclip</h1>
								</Link>
								<Users usersData={usersData} getUsersData={getUsersData} />
							</>
						);
					}}
				/>

				<Route
					path='/tiers'
					render={() => {
						return (
							<>
								<Link to='/'>
									<h1 className='header'>paperclip</h1>
								</Link>
								<Tiers usersData={usersData} getUsersData={getUsersData} />
							</>
						);
					}}
				/>

				<Route
					path='/categories'
					render={() => {
						return (
							<>
								<Link to='/'>
									<h1 className='header'>paperclip</h1>
								</Link>
								<Categories usersData={usersData} getUsersData={getUsersData} />
							</>
						);
					}}
				/>

				<Route
					path='/items'
					render={() => {
						return (
							<>
								<Link to='/'>
									<h1 className='header'>paperclip</h1>
								</Link>
								<Items usersData={usersData} getUsersData={getUsersData} />
							</>
						);
					}}
				/>

				<Route
					path='/needs'
					render={() => {
						return (
							<>
								<Link to='/'>
									<h1 className='header'>paperclip</h1>
								</Link>
								<Needs usersData={usersData} getUsersData={getUsersData} />
							</>
						);
					}}
				/>

				<Route
					path='/links'
					render={() => {
						return (
							<>
								<Link to='/'>
									<h1 className='header'>paperclip</h1>
								</Link>
								<Links usersData={usersData} getUsersData={getUsersData} />
							</>
						);
					}}
				/>
			</main>
		</div>
	);
}

export default App;
