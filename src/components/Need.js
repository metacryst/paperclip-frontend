import React, { useEffect } from 'react';

function Need(props) {
	const needs = [...props.needData];
	const tierList = props.tierData.map((tier) => {
		const filterNeeds = needs.filter((need) => need.tier._id === tier._id);
		const tierNeeds = filterNeeds.map((need) => {
			return (
				<div key={need._id}>
					<span
						className='delete'
						onClick={() => {
							props.needDelete(need._id);
						}}>
						(-)
					</span>{' '}
					{need.category.title}
				</div>
			);
		});
		return (
			<div key={tier.rank}>
				<h3>Tier {tier.rank}</h3>
				{tierNeeds}
			</div>
		);
	});
	const tierChoices = props.tierData.map((tier) => {
		return <option value={tier._id}>Tier {tier.rank}</option>;
	});
	const categoryChoices = props.categoryData.map((category) => {
		return (
			<option value={category._id}>{category.title.substring(0, 50)}</option>
		);
	});

	useEffect(() => {
		props.getTierData();
		// eslint-disable-next-line
	}, []);

	return (
		<div className="needsContainer">
			<h1>Needs</h1>
			<div>
				<span
					className='add'
					onClick={() => {
						props.toggleAddNeedHidden();
					}}>
					({props.addNeedHidden === 'hidden' ? '+' : '-'}) Add Need
				</span>
				<div className='addItem' className={props.addNeedHidden}>
					Tier:{' '}
					<select
						name='newNeedTier'
						id='needTiers'
						onChange={props.handleChange}>
						{tierChoices}
					</select>{' '}
					Category:
					<select
						name='newNeedCategory'
						id='needCategories'
						onChange={props.handleChange}>
						{categoryChoices}
					</select>
					<br></br>
					<button
						onClick={() => {
							props.submitNewNeed();
						}}>
						Submit New Need to Trade For
					</button>
				</div>
			</div>
			{tierList}
		</div>
	);
}

export default Need;
