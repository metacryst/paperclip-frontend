import React, { useEffect } from 'react';

function Item(props) {
	// console.log(props.itemData);
	const items = [...props.itemData];
	const tierList = props.tierData.map((tier) => {
		const filterItems = items.filter((item) => item.tier._id === tier._id);
		const tierItems = filterItems.map((item) => {
			return (
				<div className="tierItems" key={item._id}>
					<span
						className='delete'
						onClick={() => {
							props.itemDelete(item._id);
						}}>
						(-)
					</span>{' '}
					{item.category.title} <br></br>- {item.description}
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
		return <option value={tier._id} key={tier._id} >Tier {tier.rank}</option>;
	});
	const categoryChoices = props.categoryData.map((category) => {
		return (
			<option value={category._id} key={category._id}>{category.title.substring(0, 50)}</option>
		);
	});

	useEffect(() => {
		// console.log('useEffecting in item');
		
		props.getTierData();
		// eslint-disable-next-line
	}, []);

	return (
		<div className="itemsContainer">
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
						<div className="categoryTier">
								tier ~{' '}
								<select
									name='newItemTier'
									id='itemTiers'
									onChange={props.handleChange}
									className="select"
									>
									{tierChoices}
								</select>{' '}
								category ~
								<select
									name='newItemCategory'
									id='itemCategories'
									onChange={props.handleChange}
									className="select"
									>
									{categoryChoices}
								</select>
						</div>
						description:
						<input
							className='newItemDescription'
							type='text'
							placeholder='New Item Description'
							value={props.newItemDescription}
							name='newItemDescription'
							onChange={props.handleChange}
							autoComplete='yeeyee'
							>
						</input>
						<button
							onClick={() => {
								props.submitNewItem();
							}}
							className="itemSubmit"
							>
							===>
						</button>
				</div>
			</div>
			{tierList}
		</div>
	);
}

export default Item;
