import React, { useState, useEffect } from 'react';
import { Route, Link, useHistory } from 'react-router-dom';
import './App.css';

import About from './components/About.js';
import Trade from './components/Trade.js';
import User from './components/User.js';
import Item from './components/Item.js';
import Need from './components/Need.js';

import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

import Cycle from './components/Cycle'


function App() {
	const [error, setError] = useState('');

	// hooks for the display of every component in nav menu
	const [hideUserOptions, setHideUserOptions] = useState(true);
	const [hideSignIn, setHideSignIn] = useState(true);
	const [hideSignUp, setHideSignUp] = useState(true);
	const [hideAbout, setHideAbout] = useState(true);
	const [hideTrade, setHideTrade] = useState(true);
	
	const [hideInventory, setHideInventory] = useState(true)

	//hook for display of the nav menu itself
	const [hideNav, setHideNav] = useState(false);

	// hooks for login and sign up
	const [email, setEmail] = useState(null);
	const [username, setUsername] = useState(null);
	const [password, setPassword] = useState(null);
	const [confirmPassword, setconfirmPassword] = useState(null);

	const [isPasswordValid, setisPasswordValid] = useState(true);
	const [isUserFound, setIsUserFound] = useState(true);

	//hook for storing current user info
	//ideally this would be in local storage so refreshing wouldn't break everything
	const [userId, setUserId] = useState('');
	const [completedUsername, setcompletedUsername] = useState(null)

	//hook for trade options/link data/array of links with 0 value
	const [tradeData, settradeData] = useState(['']);
	const [tradeDataIndex, settradeDataIndex] = useState(0);
	
	//hooks for user items screen
	const [tierData, setTierData] = useState([]);
	const [categoryData, setCategoryData] = useState([]);
	
	const [itemData, setItemData] = useState([]);
	const [newItemTier, setNewItemTier] = useState([]);
	const [newItemCategory, setNewItemCategory] = useState([]);
	const [newItemDescription, setNewItemDescription] = useState('');
	const [addItemHidden, setAddItemHidden] = useState('hidden');

	const [needData, setNeedData] = useState([]);
	const [newNeedTier, setNewNeedTier] = useState([]);
	const [newNeedCategory, setNewNeedCategory] = useState([]);
	const [addNeedHidden, setAddNeedHidden] = useState('hidden');
	
	const [todoData, setTodoData] = useState('')


	// function to handle display for each url
	const history = useHistory();

	useEffect(() => {
		return history.listen((location) => {
			// console.log(location.pathname);
			// console.log('useffecting');
			// console.log(tradeData);
			// settradeDataIndex(1)
			// console.log(tradeDataIndex);

			// eslint-disable-next-line default-case
			switch (location.pathname) {
				case '/':
					setHideUserOptions(true);
					setHideAbout(true);
					setHideTrade(true);
					setHideSignUp(true);
					setHideSignIn(true);
					setHideNav(false);
					break;

				case '/user':
					setHideUserOptions(false);
					setHideNav(false)
					break;

				case '/about':
					setHideAbout(false);
					setHideNav(true);
					break;

				case '/trade':
					setHideTrade(false);
					setHideNav(true);
					break;

				case '/signin':
					setHideUserOptions(true);
					setHideNav(true);
					setHideSignIn(false);
					break;

				case '/signup':
					setHideUserOptions(true);
					setHideNav(true);
					setHideSignUp(false);
					break;
					
				case `/${username}`: 
					console.log('switching');
					setcompletedUsername(username)
					setUsername(null)
					setHideNav(true)
					setHideInventory(false)
					history.push(`/${completedUsername}`)

			}
		});
	}, [history]);

	// BUG WORKAROUND FOR DEPLOYMENT, FIX THE FACT THAT REFRESH CHANGES STATE
	window.onload = (() => {
		// console.log('window onloading');
		if(window.location.pathname != '/') {
			window.location.assign('/')
		}
	})

	function cornerButtonClick(event) {
		if (event.target.getAttribute('name') === 'user') {
			setHideUserOptions(false);
		}
		if (event.target.getAttribute('name') === 'about') {
			setHideAbout(false);
			setHideNav(true);
		}
		if (event.target.getAttribute('name') === 'trade') {
			setHideTrade(false);
			setHideNav(true);
		}
	}

	// function to handle home button click
	function paperclipButtonClick(event) {
		if (event.target.getAttribute('name') === 'user') {
			setHideUserOptions(true);
			setHideNav(false);
		}
		if (event.target.getAttribute('name') === 'about') {
			setHideAbout(true);
			setHideNav(false);
		}
		if (event.target.getAttribute('name') === 'trade') {
			setHideTrade(true);
			setHideNav(false);
		}
	}

	// A P I   I N T E R A C T I O N S
	//
	//
	//
	//
	//
	// A P I   I N T E R A C T I O N S

	function handleChange(event) {
		// eslint-disable-next-line default-case
		// console.log('handling change');

		switch (event.target.name) {
			case 'email':
				setEmail(event.target.value);
				break;
			case 'username':
				setUsername(event.target.value);
				break;
			case 'password':
				setPassword(event.target.value);
				break;
			case 'confirmPassword':
				setconfirmPassword(event.target.value);
				break;
			case 'newItemTier':
				setNewItemTier(event.target.value);
				break;
			case 'newItemCategory':
				setNewItemCategory(event.target.value);
				break;
			case 'newItemDescription':
				setNewItemDescription(event.target.value);
				break;
			case 'newNeedTier':
				setNewNeedTier(event.target.value);
				break;
			case 'newNeedCategory':
				setNewNeedCategory(event.target.value);
				break;

			default:
				console.log('switch is broke');
		}
	}

	let signUpInformation;
	let signInInformation;
	
	function checkSubmit(event) {
		event.preventDefault()
		console.log('checking submit');
		
		if (username === null) {
			return;
		}
		if (password === null) {
			return;
		} else {
			console.log(username);
			
			setcompletedUsername(username)
			console.log(completedUsername);
			
			runSubmit(event)
		}
	}

	function runSubmit(event) {
		event.preventDefault()
		
		signUpInformation = {
			email: email,
			userName: username,
			password: password,
		};
		signInInformation = {
			userName: username,
			password: password,
		};
		// console.log(signUpInformation);
		// console.log(signInInformation)
		
		switch (event.target.name) {
			case 'signUp':
				const match = confirmPassword === password;
				setisPasswordValid(match);
				if (match) {
					signUp();
				}
				break;

			case 'signIn':
				signIn();
				break;

			default:
				console.log('switch is broke');
		}
	}

	// SIGN UP AND SIGN IN FUNCTIONS

	const [postId, setPostId] = useState('');

	function signUp(body) {
		// POST request using fetch inside useEffect React hook
		console.log('signing up');

		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(signUpInformation),
		};

		console.log(requestOptions);

		fetch('https://paperclip-api.herokuapp.com/api/user', requestOptions)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setPostId(data.id);
				setUserId(data._id);
			})
			.then(() => {
				setPassword(null);
				setconfirmPassword(null);							
				setHideSignIn(true);
				setHideInventory(false);
				history.push(`/${username}`)
			});
	}

	function signIn(body) {
		const requestOptions = {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' },
		};
		console.log(completedUsername);

		console.log(requestOptions);

		fetch(`https://paperclip-api.herokuapp.com/api/user/${username}/name`, requestOptions)
			.then((response) => response.json())
			.then((data) => {
				// console.log(data);
				if (data) {
					setPostId(data.id);
					setUserId(data._id);
					setIsUserFound(true);
					getCategoryData();
				} else {
					// console.log('bad user');
					setIsUserFound(false);
				}
				// check response to see if the info was good
				// if not, call a function that will reset the state?
			})
			.then(() => {
				setPassword(null);
				setconfirmPassword(null);
				setHideSignIn(true);
				setHideInventory(false);
				history.push(`/${username}`)
			});
	}

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	//USER SCREEN FUNCTIONS

	function getCategoryData() {
		const url = `https://paperclip-api.herokuapp.com/api/category`;
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				setCategoryData(data);
				setNewItemCategory(data[0]._id);
				setNewNeedCategory(data[0]._id);
			})
			.catch(function (error) {
				setError(error);
			});
	}

	//GET tier by user id
	async function getTierData() {
		const url = `https://paperclip-api.herokuapp.com/api/user/${userId}/tier`;
		const tierFetched = await fetch(url)
			.then((response) => response.json())
			.then(async (data) => {
				const sortedData = await data.sort((a, b) => a.rank - b.rank);
				setTierData(sortedData);
				return sortedData;
			})
			.then((data) => {
				setNewItemTier(data[0]._id);
				setNewNeedTier(data[0]._id);
				// console.log(data);
				return true;
			})
			.catch(function (error) {
				setError(error);
			});

		if (tierFetched) {
			getItemData();
			getNeedData();
			// setNewItemTier(tierData[0]._id);
		}
	}

	//GET item by user id
	function getItemData() {
		const url = `https://paperclip-api.herokuapp.com/api/item/${userId}`;
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				setItemData(data);
			})
			.catch(function (error) {
				setError(error);
			});
	}

	//Get Todos
	function getTodoData() {
		const url = `https://paperclip-api.herokuapp.com/api/cycle/${userId}`;
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				setTodoData(data);
			})
			.catch(function (error) {
				setError(error);
			});
	}

	async function submitNewItem() {
		const url = `https://paperclip-api.herokuapp.com/api/tier/item/${newItemTier}/${newItemCategory}`;
		const newItemBody = {
			pic: 'pic',
			description: newItemDescription,
		};
		const newItem = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
			body: JSON.stringify(newItemBody),
		})
			.then((response) => response.json())
			.catch(function (error) {
				setError(error);
			});

		if (newItem) {
			getItemData();
			setNewItemDescription('');
		}
	}

	async function itemDelete(itemId) {
		const url = `https://paperclip-api.herokuapp.com/api/item/${itemId}`;
		const itemDeleted = await fetch(url, {
			method: 'DELETE',
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		}).catch(function (error) {
			setError(error);
		});

		if (itemDeleted) {
			getItemData();
		}
	}

	function toggleAddItemHidden() {
		if (addItemHidden === 'hidden') {
			setAddItemHidden('');
		} else {
			setAddItemHidden('hidden');
		}
	}

	/////////////////////////////////////

	function getNeedData() {
		const url = `https://paperclip-api.herokuapp.com/api/need/${userId}`;
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				setNeedData(data);
			})
			.catch(function (error) {
				setError(error);
			});
	}

	async function submitNewNeed() {
		const url = `https://paperclip-api.herokuapp.com/api/tier/need/${newNeedTier}/${newNeedCategory}`;
		const newNeed = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		})
			.then((response) => response.json())
			.catch(function (error) {
				setError(error);
			});

		if (newNeed) {
			getNeedData();
		}
	}

	async function needDelete(needId) {
		const url = `https://paperclip-api.herokuapp.com/api/need/${needId}`;
		const needDeleted = await fetch(url, {
			method: 'DELETE',
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		}).catch(function (error) {
			setError(error);
		});

		if (needDeleted) {
			getNeedData();
		}
	}

	function toggleAddNeedHidden() {
		if (addNeedHidden === 'hidden') {
			setAddNeedHidden('');
		} else {
			setAddNeedHidden('hidden');
		}
	}

	/////////////////////////////////////////
	// 
	// 	
	// 
	// 
	// 
	// 
	//TRADE FUNCTIONS

	function getUserLinks() {
		// settradeData
		console.log('about to call');
		const url = `https://paperclip-api.herokuapp.com/api/link/${userId}/unconfirmed`;
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				settradeData(data);
			})
			.catch(function (error) {
				setError(error);
			});
	}

	function decisionButtonClick(event, nextIndex) {
		switch (event.target.id) {
			case 'yes':
				// console.log('yes');
				// console.log(nextIndex);
				// console.log(tradeDataIndex);
				// console.log(tradeData[tradeDataIndex].item.description);
				decideTrade('yes', nextIndex - 1);
				settradeDataIndex(nextIndex);
				break;

			case 'no':
				// console.log('no');
				// console.log(nextIndex);
				// console.log(tradeDataIndex);
				// console.log(tradeData[tradeDataIndex].item.description);
				decideTrade('no', nextIndex - 1);
				settradeDataIndex(nextIndex);
				break;

			default:
				console.log('switch is broke');
		}
	}

	let linkUpdateInformation;

	//PUT to update links with trade decisions
	function decideTrade(decision, linkIndex) {
		console.log('trade decided');
		console.log(tradeData)
		if(!tradeData[0]) {
			console.log('no trade data!');
			return
		}
		
		let linkId = tradeData[linkIndex]._id;
		console.log(linkId);

		linkUpdateInformation = {
			confirmation: 0,
		};
		console.log(linkUpdateInformation);

		switch (decision) {
			case 'yes':
				linkUpdateInformation.confirmation = 1;
				console.log(linkUpdateInformation);
				break;

			case 'no':
				linkUpdateInformation.confirmation = -1;
				console.log(linkUpdateInformation);
				break;

			default:
				console.log('switch is broke');
		}
		// create an object for trade link and update confirmed value to -1 or 0 based on the value that's passed as a variable into this function
		//put the trade link into the body

		const requestOptions = {
			method: 'PATCH',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(linkUpdateInformation),
		};

		fetch(`https://paperclip-api.herokuapp.com/api/link/${linkId}/confirm`, requestOptions)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
			});
	}
	
	
	
	// CYCLE FUNCTION
	
	function getTodoData() {
		const url = `https://paperclip-api.herokuapp.com/api/cycle/${userId}`;
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				setTodoData(data);
			})
			.catch(function (error) {
				setError(error);
			});
	}

	// A P I   I N T E R A C T I O N S
	//
	//
	//
	//
	//
	// A P I   I N T E R A C T I O N S

	return (
		<div className='wrapper' id='grad'>
			<main>
				<div className='graphicHolder'>
					<Link to="/link">
						<p className='graphic'>
							=======<br></br>=====
						</p>
					</Link>
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
									{/* USER BUTTON */}
									<div className={hideUserOptions ? 'user' : 'hidden'}>
										<Link to={completedUsername ? `${completedUsername}` : 'user'}>
											{/* GENERIC USER HEADER */}
											<h2
												onClick={cornerButtonClick}
												className={completedUsername ? 'hidden' : 'user'}
												name='user'
												>
												user
											</h2>
											{/* USERNAME HEADER */}
											<h2
												className={completedUsername ? 'user' : 'hidden'}
												name='user'
												>
												{completedUsername}
											</h2>
										</Link>
									</div>
									{/* USER BUTTON ON CLICK WHILE NOT SIGNED IN */}
									<div className={hideUserOptions ? 'hidden' : 'user'}>
										<Link to='/signup'>
											<h2>sign up</h2>
										</Link>
										<Link to='/signin'>
											<h2>sign in</h2>
										</Link>
									</div>
								</div>
							</>
						);
					}}
				/>
				<Route
					path={'/' + completedUsername}
					render={() => {
						return (
							<>
								<Link to='/'>
									<h1 className='header'>paperclip//{completedUsername}</h1>
								</Link>
								<Item
									toggleAddItemHidden={toggleAddItemHidden}
									addItemHidden={addItemHidden}
									newItemDescription={newItemDescription}
									handleChange={handleChange}
									categoryData={categoryData}
									tierData={tierData}
									itemData={itemData}
									itemDelete={itemDelete}
									getTierData={getTierData}
									submitNewItem={submitNewItem}
									setNewItemTier={setNewItemTier}
									setNewItemCategory={setNewItemCategory}
									paperclipButtonClick={paperclipButtonClick}
								/>
								<Need
									toggleAddNeedHidden={toggleAddNeedHidden}
									addNeedHidden={addNeedHidden}
									handleChange={handleChange}
									categoryData={categoryData}
									tierData={tierData}
									needData={needData}
									needDelete={needDelete}
									getTierData={getTierData}
									submitNewNeed={submitNewNeed}
									setNewNeedTier={setNewNeedTier}
									setNewNeedCategory={setNewNeedCategory}
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
									<h1 className={hideTrade ? 'hidden' : 'header'}
										name='trade'
										onClick={paperclipButtonClick}>paperclip//trade
									</h1>
								</Link>
								<Trade
									getUserLinks={getUserLinks}
									tradeData={tradeData}
									decisionButtonClick={decisionButtonClick}
									tradeDataIndex={tradeDataIndex}
								/>
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
									<h1 className='header'>paperclip//</h1>
								</Link>
								<About />
							</>
						);
					}}
				/>
				<Route
					path='/signup'
					render={() => {
						return (
							<>
								<Link to='/'>
									<h1 className='header'>paperclip//sign up</h1>
								</Link>
								<SignUp
									handleChange={handleChange}
									checkSubmit={checkSubmit}
									hideSignUp={hideSignUp}
									isPasswordValid={isPasswordValid}
								/>
							</>
						);
					}}
				/>
				<Route
					path='/signin'
					render={() => {
						return (
							<>
								<Link to='/'>
									<h1 className='header'>paperclip//sign in</h1>
								</Link>
								<SignIn
									handleChange={handleChange}
									checkSubmit={checkSubmit}
									hideSignIn={hideSignIn}
									isUserFound={isUserFound}
								/>
							</>
						);
					}}
				/>
				<Route
				path='/link'
				render={()=>{
					return(
						<>
						<Link to='/'>
							<h1 className='header'>paperclip</h1>
						</Link>
							<Cycle
							getTodoData={getTodoData}
							useEffect={useEffect}
							todoData={todoData}
						/>	
						</>
					)
				}}
				/>
			</main>
		</div>
	);
}

export default App;
