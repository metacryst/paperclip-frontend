import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Item(props) {
	// console.log(props.itemData);
	const items = [...props.itemData];
	const tierList = props.tierData.map((tier) => {
		const filterItems = items.filter((item) => item.tier._id === tier._id);
		const tierItems = filterItems.map((item) => {
			return (
				<div key={item._id}>
					<span
						className='delete'
						onClick={() => {
							props.itemDelete(item._id);
						}}>
						(-)
					</span>{' '}
					{item.category.title} - {item.description}
				</div>
			);
		});
		return (
			<div key={tier.rank}>
				<h3>Tier {tier.rank}</h3>
				{tierItems}
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
		<>
			<h1>Items</h1>
			<div>
				<span
					className='add'
					onClick={() => {
						props.toggleAddItemHidden();
					}}>
					({props.addItemHidden === 'hidden' ? '+' : '-'}) Add Item
				</span>
				<div className='addItem' className={props.addItemHidden}>
					Tier:{' '}
					<select
						name='newItemTier'
						id='itemTiers'
						onChange={props.handleChange}>
						{tierChoices}
					</select>{' '}
					Category:
					<select
						name='newItemCategory'
						id='itemCategories'
						onChange={props.handleChange}>
						{categoryChoices}
					</select>
					<br></br>
					Description:
					<input
						className='newItemDescription'
						type='text'
						placeholder='New Item Description'
						value={props.newItemDescription}
						name='newItemDescription'
						onChange={props.handleChange}></input>
					<br></br>
					<button
						onClick={() => {
							props.submitNewItem();
						}}>
						Submit New Item to Trade Away
					</button>
				</div>
			</div>
			{tierList}
		</>
	);
}

export default Item;
