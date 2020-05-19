import React from 'react';

function Needs(props) {
  return (
    <div className="NeedsData">
    <button onClick={props.getUsersData}>Needs</button>
    <p>{JSON.stringify(props.usersData)}</p>
    </div>
  )
}

export default Needs