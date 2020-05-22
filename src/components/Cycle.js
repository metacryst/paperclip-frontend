import React, { useEffect } from 'react';

function Cycle(props) {
	useEffect(() => {
		// console.log('useEffecting in item');

		props.getTodoData();
		// eslint-disable-next-line
	}, []);

	const todoItems = props.todoData.map((todo) => {
		// console.log(todo)
		return (
			<div key={todo.id}>
				<span
					onClick={() => {
						props.getCycleData(todo.cycle);
					}}>
					(+)
				</span>{' '}
				Contact {todo.email} to trade your {todo.category} with them!
			</div>
		);
	});

	const cyclePath = props.cycleData
		.map((link) => {
			return (
				<div key={link._id}>
					<div>{link.item.category.title}</div>
					<div>|</div>
					<div>v</div>
				</div>
			);
		})

	// const cyclePath = (data) => {
	// 	// array = ['Bread', 'Shoes'];

	// 	const result = [];

	// 	let top = '/-->';
	// 	let el1 = '|   |';
	// 	let el2 = '|   v';
	// 	let fil = '|  ';
	// 	let bot = '\\--';
	// 	if (data.length === 2) {
	// 		result.push(top + data[0]);
	// 		result.push(el1);
	// 		result.push(el2);
	// 		result.push(bot + data[1]);
	// 	} else {
	// 		console.log(top + data[0]);
	// 		for (let i = 1; i < data.length - 1; i++) {
	// 			result.push(el1);
	// 			result.push(el2);
	// 			result.push(fil + data[i]);
	// 		}
	// 		result.push(el1);
	// 		result.push(el2);
	// 		result.push(bot + data[data.length - 1]);
	// 	}

	// 	return result.map((row) => <div>{row}</div>);
	// };

	return (
		<>
			<div>{todoItems}</div>
			<div>{cyclePath}</div>
		</>
	);
}

export default Cycle;
