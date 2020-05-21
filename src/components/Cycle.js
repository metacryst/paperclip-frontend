import React from 'react';

function Cycle(props) {
	props.useEffect(() => {
		props.getTodoData();
		// eslint-disable-next-line
	}, []);
	// console.log(props.todoData)

	const cycleList = props.todoData.map((todo) => {
		return <p>{props.todoData}</p>;
	});
}

//To do list
//Pull itemID

//Completed Cycles
//List of all trades in cycle, category

//CycleID in link

//confirmation
//sort by urgency (email person at top)

export default Cycle;
