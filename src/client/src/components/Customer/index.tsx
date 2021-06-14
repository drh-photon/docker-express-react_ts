import React, { useState, useEffect }from 'react';
import axios from 'axios'

interface IUser {
  id: number;
  name: string;
  email: string;
}

export default function Customer() {
  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    axios.get<IUser[]>('/api/customers')
      .then(({ data }) => {
        setUsers(data)
      })
  }, [])


  return (
    <div>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  )
}