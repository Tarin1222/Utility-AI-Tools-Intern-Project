import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminPanel = () => {
  const navigate = useNavigate();

  const handleGraphClick = () => {
    navigate('/adminGraph'); // Navigate to the graph page
  };

  const handleUserListClick = () => {
    navigate('/userList'); // Navigate to the user list page
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#02131d' }}>
      {/* Left Div */}
      <div
        style={{
          width: '25%',
          backgroundColor: '#02031d',
          color: 'white',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Admin Info */}
        <div style={{ marginBottom: '40px' }}>
          <h2>Farzana Islam</h2>
          <p>farzana@daydream.com</p>
        </div>

        {/* Menu List */}
        <div>
          <p style={{ marginBottom: '20px', cursor: 'pointer' }}>Home</p>
          <p style={{ marginBottom: '20px', cursor: 'pointer' }}>User Data</p>
          <p style={{ cursor: 'pointer' }}>Payment List</p>
        </div>
      </div>

      {/* Right Div */}
      <div style={{ width: '75%', padding: '20px' }}>
        {/* Card 1: Graphs */}
        <div
          onClick={handleGraphClick}
          style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
            marginBottom: '20px',
            cursor: 'pointer',
          }}
        >
          <h3>Graphs</h3>
        </div>

        {/* Card 2: User List */}
        <div
          onClick={handleUserListClick}
          style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
            cursor: 'pointer',
          }}
        >
          <h3>User List</h3>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
