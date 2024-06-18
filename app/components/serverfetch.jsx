import React from 'react'

const serverfetch = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', {cache : 'no-store'}) 
    const users = await res.json();
  
    return (
      <div>
        <h1>USERS</h1>
        <ul>
          {users.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>
      </div>
    )
}

export default serverfetch
