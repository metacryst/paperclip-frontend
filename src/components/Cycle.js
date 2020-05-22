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
				{todo.email} // trade your {todo.category}!
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
			<div className="todoItems">{todoItems}</div>
			<div className="cyclePath">{cyclePath}</div>
		</>
	);
}

export default Cycle;

