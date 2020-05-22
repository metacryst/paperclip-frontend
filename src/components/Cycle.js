import React, {useEffect} from 'react';


function Cycle(props) {
	useEffect(() => {
		console.log('useEffecting in cycle');

		props.getTodoData();
		// eslint-disable-next-line
	}, []);
	
	const todoItems = props.todoData.map((todo) => {
		// console.log(todo)
		return (
			<div key={todo.id}>
				Contact {todo.email} to trade your {todo.category} with them!
			</div>
		);
	});
		return( 
			<div>{todoItems}</div>
		)
	

//To do list
//Pull itemID

//Completed Cycles

// let array = ['Bread', 'Shoes', 'Table', 'Sofa', 'Jet Ski', 'Car', 'House'];
// // array = ['Bread', 'Shoes'];
// let top = '/-->';
// let el1 = '|   |';
// let el2 = '|   v';
// let fil = '|  ';
// let bot = '\\--';
// if (array.length === 2) {
// 	console.log(top + array[0]);
// 	console.log(el1);
// 	console.log(el2);
// 	console.log(bot + array[1]);
// }
// console.log(top + array[0]);
// for (let i = 1; i < array.length - 1; i++) {
// 	console.log(el1);
// 	console.log(el2);
// 	console.log(fil + array[i]);
// }
// console.log(el1);
// console.log(el2);
// console.log(bot + array[array.length - 1]);
// List of all trades in cycle, category

//CycleID in link

//confirmation
//sort by urgency (email person at top)
}
export default Cycle;