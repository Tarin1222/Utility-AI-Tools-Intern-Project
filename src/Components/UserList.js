import React, { useState } from 'react';

const UserList = () => {
  // Example data
  const [users] = useState([
    { id: 1, name: 'Abrar Hossain', email: 'abrar@example.com', address: '123 USA St', phone: '123-456-7890' },
    { id: 2, name: 'Farzana Tarin', email: 'farzana@example.com', address: '456 USA St', phone: '987-654-3210' },
    { id: 3, name: 'Warina Khan', email: 'warina@example.com', address: '789 Dubai St', phone: '555-555-5555' },
    { id: 1, name: 'Mihrisah', email: 'Mihrisah@example.com', address: '19 CANADA St', phone: '123-456-7890' },
    { id: 2, name: 'Muhammed', email: 'muhammed@example.com', address: '787 QATAR St', phone: '987-654-3210' },
    { id: 3, name: 'Beyza', email: 'beyza@example.com', address: '453 UK St', phone: '555-555-5555' },
  ]);

  return (
    <div style={{ padding: '20px', backgroundColor: '#02131d', minHeight: '100vh', color: 'white' }}>
      <h2>User List</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid white', padding: '8px' }}>Name</th>
            <th style={{ border: '1px solid white', padding: '8px' }}>Email</th>
            <th style={{ border: '1px solid white', padding: '8px' }}>Address</th>
            <th style={{ border: '1px solid white', padding: '8px' }}>Phone</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td style={{ border: '1px solid white', padding: '8px' }}>{user.name}</td>
              <td style={{ border: '1px solid white', padding: '8px' }}>{user.email}</td>
              <td style={{ border: '1px solid white', padding: '8px' }}>{user.address}</td>
              <td style={{ border: '1px solid white', padding: '8px' }}>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
