import React from 'react';

function Categories(props) {
  return (
    <div className="userData">
    <button onClick={props.getUsersData}>Categories</button>
    <p>{JSON.stringify(props.usersData)}</p>
    </div>
  )
}

export default Categories