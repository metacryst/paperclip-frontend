import React from 'react';

function Items(props) {
  return (
    <div className="ItemsData">
    <button onClick={props.getUsersData}>Items</button>
    <p>{JSON.stringify(props.usersData)}</p>
    </div>
  )
}

export default Items