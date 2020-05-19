import React from 'react';

function Trade(props) {
	return (
		<>
			<a href=''>
    			<h1 className={props.hideTrade ? 'hidden' : 'header'} name='trade' onClick={props.paperclipButtonClick}>paperclip</h1>
    	</a>
			<div className={props.hideTrade ? 'hidden' : 'trade'}>
				
				this is a trade
			</div>
		</>
	);
}

export default Trade;
