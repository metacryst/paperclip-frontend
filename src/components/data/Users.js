import React from 'react';

function Users(props) {
  return (
    <div className="userData">
    <button onClick={props.getUsersData}>users</button>
    <p>{JSON.stringify(props.usersData)}</p>
    </div>
  )
}

export default Users