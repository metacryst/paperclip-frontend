import React from 'react';

function Tiers(props) {
  return (
    <div className="TiersData">
    <button onClick={props.getUsersData}>Tiers</button>
    <div><pre>{JSON.stringify(props.usersData)}</pre></div>
    </div>
  )
}

export default Tiers