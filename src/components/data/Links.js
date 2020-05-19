import React from 'react';

function Links(props) {
  return (
    <div className="linksData">
    <button onClick={props.getUsersData}>Links</button>
    <p>{JSON.stringify(props.usersData)}</p>
    </div>
  )
}

export default Links