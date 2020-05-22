import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Trade(props) {
	useEffect(() => {
		console.log('useeffecting');
		props.getUserLinks();
		// eslint-disable-next-line
	}, []);

	return (
		<>
			<div className={props.hideTrade ? 'hidden' : 'tradeDisplay'}>
				<div className={props.tradeData[0] ? 'hidden' : 'tradesmall'}>
					<h2>trade--</h2>

					<p className='itemTradeDescription'>
						{props.tradeData[props.tradeDataIndex]
							? props.tradeData[props.tradeDataIndex].item.description
							: 'nothing to trade!'}
					</p>
				</div>
			</div>
			<button
				id='yes'
				className={
					props.tradeData[props.tradeDataIndex] ? 'hidden' : 'decisionButton'
				}
				onClick={(e) => props.decisionButtonClick(e, props.tradeDataIndex + 1)}>
				yes
			</button>

			<button
				id='no'
				className={
					props.tradeData[props.tradeDataIndex] ? 'hidden' : 'decisionButton'
				}
				onClick={(e) => props.decisionButtonClick(e, props.tradeDataIndex + 1)}>
				no
			</button>
		</>
	);
}

export default Trade;
