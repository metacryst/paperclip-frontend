import React, { Component, useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';

import Users from './components/data/Users.js';
import Categories from './components/data/Categories.js';
import Items from './components/data/Items.js';
import Needs from './components/data/Needs.js';
import Tiers from './components/data/Tiers.js';
import Links from './components/data/Links.js';

import About from './components/About.js';
import Trade from './components/Trade.js';
import User from './components/User.js';

function App() {
	const [usersData, setUsersData] = useState([]);

	const [apiLink, setApiData] = useState([]);

	const [error, setError] = useState('');

  const [hideUser, setHideUser] = useState(true);
  const [hideAbout, setHideAbout] = useState(true);
  const [hideTrade, setHideTrade] = useState(true);
  const [hideNav, setHideNav] = useState(false)

  
  
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
  
  function paperclipButtonClick (event) {
    event.preventDefault();
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
  									<h2 onClick={cornerButtonClick} className='trade' name='trade'>
  										Trade
  									</h2>
  								</Link>
  								<Link to='/about'>
  									<h2 onClick={cornerButtonClick} className='about' name='about'>
  										About
  									</h2>
  								</Link>
  								<Link to='/user'>
  									<h2 onClick={cornerButtonClick} className='user' name='user'>
  										User
  									</h2>
  								</Link>
                </div>
                <User hideUser={hideUser} paperclipButtonClick={paperclipButtonClick}/>
                <About hideAbout={hideAbout} paperclipButtonClick={paperclipButtonClick}/>
                <Trade hideTrade={hideTrade} paperclipButtonClick={paperclipButtonClick}/>
							</>
						);
					}}
				/>
				{/* <Route
					path='/user'
					render={() => {
						return (
							<>
								<User hideUser={hideUser} paperclipButtonClick={paperclipButtonClick}/>
							</>
						);
					}}
				/> */}
				{/* <Route
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
				/> */}
				{/* <Route
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
				/> */}
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
