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
		return <option value={tier._id} key={tier._id}>Tier {tier.rank}</option>;
	});
	const categoryChoices = props.categoryData.map((category) => {
		return (
			<option value={category._id} key={category._id}>{category.title.substring(0, 50)}</option>
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
				<div className="categoryTier">
							tier ~{' '}
							<select
								name='newNeedTier'
								id='needTiers'
								onChange={props.handleChange}
								className="select"
								>
								{tierChoices}
							</select>{' '}
							category ~
							<select
								name='newNeedCategory'
								id='needCategories'
								onChange={props.handleChange}
								className="select"
								>
								{categoryChoices}
							</select>
					</div>
					<button
						onClick={() => {
							props.submitNewNeed();
						}}
						className="needSubmit">
						===>
					</button>
				</div>
			</div>
			{tierList}
		</div>
	);
}

export default Need;
