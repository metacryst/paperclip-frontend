import React, { Component, useState, useEffect } from 'react';
import { Route, Link } from "react-router-dom";
import './App.css'

import Users from "./components/Users.js"
import Categories from "./components/Categories.js"
import Items from "./components/Items.js"
import Needs from "./components/Needs.js"
import Tiers from "./components/Tiers.js"
import Links from "./components/Links.js"
import About from "./components/About.js"

function App() {
      
  const [usersData, setUsersData] = useState([]);

  const [apiLink, setApiData] = useState([]);
  
  const [error, setError] = useState('')


  function getUsersData() {    
    const url = `http://localhost:8080/api/${apiLink}`
    console.log(apiLink);
    
    fetch(url)
      .then(response => response.json())
      .then(response => {
        console.log(response);        
        setUsersData(response);
        console.log(usersData);
        
      })
      .catch(function(error) {
        setError(error);
      })
    }
  
  function handleClick() {
    console.log('click');
  }
  
  function navButtonClick(event) {    
    setApiData(event.target.getAttribute('name'))
  }
    
  

  return (
    <div className='wrapper'>
      <main>
        <Route path="/" exact={true} render={() => {
          return (
            <>
              <Link to="/users">
                <h2 className="users" onClick={navButtonClick} name='user'>users</h2>
              </Link>
              <Link to="/tiers">
                <h2 className="tiers" onClick={navButtonClick} name='tier'>tiers</h2>
              </Link>
              <Link to="/categories">
                <h2 className="categories" onClick={navButtonClick} name='category'>categories</h2>
              </Link>
              <Link to="/items">
                <h2 className="items" onClick={navButtonClick} name='item'>items</h2>
              </Link>
              <Link to="/needs">
                <h2 className="needs" onClick={navButtonClick} name='need'>needs</h2>
              </Link>
              <Link to="/links">
                <h2 className="links" onClick={navButtonClick} name='link'>links</h2>
              </Link>
              <Link to="/about">
                <h2 className="about" >about</h2>
              </Link>
            </>
          )
        }} />  
        
        <Route path="/users" render={() => {
          return (
            <>
              <Link to="/">
                <h1 className="header">paperclip</h1>
              </Link>
              <Users usersData={usersData} getUsersData={getUsersData}/>
            </>
          )
        }}
        />
        
        
        <Route path="/tiers" render={() => {
          return (
            <>
              <Link to="/">
                <h1 className="header">paperclip</h1>
              </Link>
              <Tiers usersData={usersData} getUsersData={getUsersData}/>
            </>
          )
        }}
        />
        
        <Route path="/categories" render={() => {
          return (
            <>
              <Link to="/">
                <h1 className="header">paperclip</h1>
              </Link>
              <Categories usersData={usersData} getUsersData={getUsersData}/>
            </>
          )
        }}
        />
        
        <Route path="/items" render={() => {
          return (
            <>
              <Link to="/">
                <h1 className="header">paperclip</h1>
              </Link>
              <Items usersData={usersData} getUsersData={getUsersData}/>
            </>
          )
        }}
        />
        
        <Route path="/needs" render={() => {
          return (
            <>
              <Link to="/">
                <h1 className="header">paperclip</h1>
              </Link>
              <Needs usersData={usersData} getUsersData={getUsersData}/>
            </>
          )
        }}
        />
        
        <Route path="/links" render={() => {
          return (
            <>
              <Link to="/">
                <h1 className="header">paperclip</h1>
              </Link>
              <Links usersData={usersData} getUsersData={getUsersData}/>
            </>
          )
        }}
        />
       
        
        <Route path="/about" render={() => {
          return (
            <>
              <Link to="/">
                <h1 className="header">paperclip</h1>
              </Link>
              <About />
            </>
          )
        }}
        />
        
      </main>
  </div>
  );
}

export default App