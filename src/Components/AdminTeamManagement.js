import React, { useState } from 'react';

const AdminTeamManagement = () => {
  // Sample team data
  const [teamMembers] = useState([
    { id: 1, name: 'Farzana Islam', role: 'Project Manager', email: 'farzana@daydream.com', status: 'Active' },
    { id: 2, name: 'Alexa', role: 'Software Developer', email: 'alexa@example.com', status: 'Active' },
    { id: 3, name: 'Siri', role: 'UI/UX Designer', email: 'siri@example.com', status: 'Inactive' },
    { id: 4, name: 'Bixby', role: 'QA Engineer', email: 'bixby@example.com', status: 'Active' },
  ]);

  // Styles object
  const styles = {
    container: {
      backgroundColor: '#f8f9fa',
      padding: '40px',
      borderRadius: '12px',
      margin: '20px auto',
      width: '90%',
      maxWidth: '1200px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
      border: '1px solid #e0e0e0',
    },
    header: {
      textAlign: 'center',
      marginBottom: '40px',
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#343a40',
    },
    subtitle: {
      fontSize: '1.2rem',
      color: '#6c757d',
    },
    tableWrapper: {
      overflowX: 'auto',
    },
    table: {
      width: '100%',
      backgroundColor: '#ffffff',
      borderCollapse: 'separate',
      borderSpacing: '0 15px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
      borderRadius: '10px',
      padding: '15px',
    },
    tableRow: {
      backgroundColor: '#ffffff',
      padding: '15px',
      transition: 'box-shadow 0.3s ease',
      cursor: 'pointer',
    },
    tableRowHover: {
      boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',
    },
    tableCell: {
      padding: '15px 20px',
      borderBottom: '1px solid #dee2e6',
      fontSize: '1rem',
      color: '#495057',
      textAlign: 'left',
    },
    badge: {
      display: 'inline-block',
      fontSize: '0.9rem',
      padding: '8px 12px',
      borderRadius: '30px',
      textAlign: 'center',
      fontWeight: 'bold',
    },
    active: {
      backgroundColor: '#28a745',
      color: 'white',
    },
    inactive: {
      backgroundColor: '#dc3545',
      color: 'white',
    },
    button: {
      backgroundColor: '#007bff',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '5px',
      color: '#fff',
      fontSize: '1rem',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Team Management</h1>
        <p style={styles.subtitle}>Efficiently manage your team members</p>
      </div>

      <div style={styles.tableWrapper}>
        <table className="table table-striped table-hover" style={styles.table}>
          <thead>
            <tr>
              <th style={styles.tableCell}>#</th>
              <th style={styles.tableCell}>Name</th>
              <th style={styles.tableCell}>Role</th>
              <th style={styles.tableCell}>Email</th>
              <th style={styles.tableCell}>Status</th>
            </tr>
          </thead>
          <tbody>
            {teamMembers.map((member) => (
              <tr
                key={member.id}
                style={styles.tableRow}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.1)')}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}
              >
                <td style={styles.tableCell}>{member.id}</td>
                <td style={styles.tableCell}>{member.name}</td>
                <td style={styles.tableCell}>{member.role}</td>
                <td style={styles.tableCell}>{member.email}</td>
                <td style={styles.tableCell}>
                  <span
                    style={
                      member.status === 'Active'
                        ? { ...styles.badge, ...styles.active }
                        : { ...styles.badge, ...styles.inactive }
                    }
                  >
                    {member.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminTeamManagement;
