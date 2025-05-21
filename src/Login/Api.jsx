import React, { useEffect, useState } from 'react';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetching data from an API
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []); // Runs once on component mount

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>User List</h1>
      {users.map(user => (
        <div key={user.id}>
          <p>{user.name} ({user.email})</p>
        </div>
      ))}
    </div>
  );
};

export default Users;
