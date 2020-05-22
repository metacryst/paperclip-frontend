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


	return (
		<>
			<div>{todoItems}</div>
			<div>{cyclePath}</div>
		</>
	);
}

export default Cycle;

