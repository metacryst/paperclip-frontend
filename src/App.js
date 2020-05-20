import React, { useState, useEffect } from 'react';
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
  
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');

	//hook for display of the nav menu itself
  const [hideNav, setHideNav] = useState(false)

	
	
	// function to handle display for each url
	const history = useHistory()

	useEffect(() => {
	  return history.listen(location => {
			console.log(location.pathname);
			
	    // eslint-disable-next-line default-case
	    switch (location.pathname) {
				case '/':
					setHideUser(true)
					setHideAbout(true)
					setHideTrade(true)
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
					setHideSignUp(false);
					break;
				case '/signup':
					setHideUser(true)
					setHideNav(true)
					setHideSignIn(false)
					setHideSignUp(false)
					break;
			}
	  })
	}, [history])
	

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
	switch (event.target.name){
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

function runSubmit(event){
	event.preventDefault()
	let information = {
		username: username,
		password: password
	}
	console.log(information)
	signUp(information)
}

// SignUp POST

const [postId, setPostId] = useState('');

function signUp () {
	// POST request using fetch inside useEffect React hook
	const requestOptions = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			title: 'React Hooks POST Request Example',
		}),
	};
	fetch(
		'http://localhost:8080/api/user',
		requestOptions
	)
		.then((response) => response.json())
		.then((data) => setPostId(data.id));
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
				<Route
					path='/'
					// exact={true}
					render={() => {
						return (
							<>
								<div className={hideNav ? 'hidden' : ''}>
									<Link to='/data'>
										<h2 className='data' name='data'>
											Data
										</h2>
									</Link>
									<Link to='/trade'>
										<h2
											onClick={cornerButtonClick}
											className='trade'
											name='trade'>
											Trade
										</h2>
									</Link>
									<Link to='/about'>
										<h2
											onClick={cornerButtonClick}
											className='about'
											name='about'>
											About
										</h2>
									</Link>
									<Link to='/user'>
										<h2
											onClick={cornerButtonClick}
											className='user'
											name='user'>
											User
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
								<SignIn handleChange={handleChange} runSubmit={runSubmit} />
							</>
						);
					}}
				/>
				<Route
					path='/signup'
					render={() => {
						return (
							<>
								<SignUp handleChange={handleChange} runSubmit={runSubmit}/>
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
