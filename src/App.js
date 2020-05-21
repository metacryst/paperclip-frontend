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

//REMEMBER TO UNCOMMENT THE REFRESH WORKAROUND BEFORE DEPLOYING

function App() {
	const [error, setError] = useState('');

	// hooks for the display of every component in nav menu
	const [hideUser, setHideUser] = useState(true);
	const [hideSignIn, setHideSignIn] = useState(true);
	const [hideSignUp, setHideSignUp] = useState(true);
	const [hideAbout, setHideAbout] = useState(true);
	const [hideTrade, setHideTrade] = useState(true);

	//hook for display of the nav menu itself
	const [hideNav, setHideNav] = useState(false);

	// hooks for login and sign up
	const [email, setEmail] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setconfirmPassword] = useState('');

	const [isPasswordValid, setisPasswordValid] = useState(true);
	const [isUserFound, setIsUserFound] = useState(true);

	//hook for storing current user info
	const [userId, setUserId] = useState('');

	//hook for trade options/link data/array of links with 0 value
	const [tradeData, settradeData] = useState(['']);
	const [tradeDataIndex, settradeDataIndex] = useState(0);

	const [tierData, setTierData] = useState([]);
	const [categoryData, setCategoryData] = useState([]);

	const [itemData, setItemData] = useState([]);
	const [newItemTier, setNewItemTier] = useState([]);
	const [newItemCategory, setNewItemCategory] = useState([]);
	const [newItemDescription, setNewItemDescription] = useState(null);
	const [addItemHidden, setAddItemHidden] = useState('hidden');
	const [todoData, setTodoData] = useState('')

	const [needData, setNeedData] = useState([]);
	const [newNeedTier, setNewNeedTier] = useState([]);
	const [newNeedCategory, setNewNeedCategory] = useState([]);
	const [addNeedHidden, setAddNeedHidden] = useState('hidden');

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
					setHideUser(true);
					setHideAbout(true);
					setHideTrade(true);
					setHideSignUp(true);
					setHideSignIn(true);
					setHideNav(false);
					break;

				case '/user':
					setHideUser(false);
					setHideNav(true);
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
					setHideUser(true);
					setHideNav(true);
					setHideSignIn(false);
					break;

				case '/signup':
					setHideUser(true);
					setHideNav(true);
					setHideSignUp(false);
					break;
			}
		});
	}, [history]);

	// BUG WORKAROUND FOR DEPLOYMENT, FIX THE FACT THAT REFRESH CHANGES STATE
	// window.onload = (() => {
	// 	// console.log('window onloading');
	// 	if(window.location.pathname != '/') {
	// 		window.location.assign('/')
	// 	}
	// })

	function cornerButtonClick(event) {
		if (event.target.getAttribute('name') === 'user') {
			setHideUser(false);
			setHideNav(true);
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
			setHideUser(true);
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

	function runSubmit(event) {
		event.preventDefault();

		if (username === '') {
			return;
		}
		if (password === '') {
			return;
		}

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

		fetch('http://localhost:8080/api/user', requestOptions)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setPostId(data.id);
				setUserId(data._id);
			})
			.then(() => {
				setEmail('');
				setUsername('');
				setPassword('');
				setconfirmPassword('');
			});
	}

	function signIn(body) {
		const requestOptions = {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' },
		};

		console.log(requestOptions);

		fetch(`http://localhost:8080/api/user/${username}/name`, requestOptions)
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
				setEmail('');
				setUsername('');
				setPassword('');
				setconfirmPassword('');
			});
	}

	//USER SCREEN FUNCTIONS

	function getCategoryData() {
		console.log('hi');
		const url = `http://localhost:8080/api/category`;
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
		const url = `http://localhost:8080/api/user/${userId}/tier`;
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
		const url = `http://localhost:8080/api/item/${userId}`;
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
		const url = `http://localhost:8080/api/cycle/${userId}`;
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
		const url = `http://localhost:8080/api/tier/item/${newItemTier}/${newItemCategory}`;
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
		const url = `http://localhost:8080/api/item/${itemId}`;
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

	//GET need by user id
	function getNeedData() {
		const url = `http://localhost:8080/api/need/${userId}`;
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
		const url = `http://localhost:8080/api/tier/need/${newNeedTier}/${newNeedCategory}`;
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
		const url = `http://localhost:8080/api/need/${needId}`;
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

	//TRADE FUNCTIONS

	function getUserLinks() {
		// settradeData
		console.log('about to call');
		const url = `http://localhost:8080/api/link/${userId}/unconfirmed`;
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
		// console.log(tradeData[0].confirmed)

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

		fetch(`http://localhost:8080/api/link/${linkId}/confirm`, requestOptions)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
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
					<p className='graphic'>
						=======<br></br>=====
					</p>
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
									<Link to='/link'>
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
					path='/inventory'
					render={() => {
						return (
							<>
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
									<h1 className='header'>paperclip</h1>
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
									<h1 className='header'>paperclip</h1>
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
								<SignUp
									handleChange={handleChange}
									runSubmit={runSubmit}
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
								<SignIn
									handleChange={handleChange}
									runSubmit={runSubmit}
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
