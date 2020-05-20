import React from 'react';
import { Link } from 'react-router-dom';


function Trade(props) {
	return (
		<>
			<Link to='/'>
    			<h1 className={props.hideTrade ? 'hidden' : 'header'} name='trade' onClick={props.paperclipButtonClick}>paperclip</h1>
			</Link>
			<div className={props.hideTrade ? 'hidden' : 'trade'}>
				
				this is a trade
			</div>
		</>
	);
}

export default Trade;
