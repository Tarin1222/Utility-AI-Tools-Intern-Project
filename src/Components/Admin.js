import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Email:', email);
    console.log('Password:', password);
    
    // After login, navigate to the admin panel page
    navigate('/adminPanel');
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#02031d',
        padding: '20px',
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: '100%',
          maxWidth: '400px',
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Admin</h2>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              fontSize: '16px',
            }}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              fontSize: '16px',
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#02031d',
            color: 'white',
            borderRadius: '4px',
            border: 'none',
            fontSize: '16px',
            cursor: 'pointer',
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Admin;
