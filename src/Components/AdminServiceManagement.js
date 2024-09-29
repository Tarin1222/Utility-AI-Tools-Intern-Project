import React, { useState } from 'react';

const AdminServiceManagement = () => {
  // Sample service data
  const [services, setServices] = useState([
    { id: 1, name: 'Web Development', status: 'Active', description: 'Full-stack web development services.' },
    { id: 2, name: 'Mobile App Development', status: 'Active', description: 'iOS and Android app development.' },
    { id: 3, name: 'SEO Optimization', status: 'Inactive', description: 'Improving search engine rankings.' },
    { id: 4, name: 'Cloud Services', status: 'Active', description: 'Cloud migration and management.' },
  ]);

  // Styles object for the design
  const styles = {
    container: {
      backgroundColor: '#edf2f7',
      padding: '50px',
      borderRadius: '16px',
      margin: '30px auto',
      width: '85%',
      maxWidth: '1000px',
      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)',
    },
    header: {
      textAlign: 'center',
      marginBottom: '50px',
    },
    title: {
      fontSize: '3rem',
      fontWeight: '600',
      color: '#2d3748',
    },
    subtitle: {
      fontSize: '1.1rem',
      color: '#718096',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      borderRadius: '12px',
      overflow: 'hidden',
    },
    tableRow: {
      backgroundColor: '#fff',
      padding: '20px',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      cursor: 'pointer',
      borderBottom: '2px solid #e2e8f0',
    },
    tableHeader: {
      backgroundColor: '#2d3748',
      color: '#fff',
      textAlign: 'left',
      fontWeight: '600',
      padding: '16px',
      textTransform: 'uppercase',
    },
    tableCell: {
      padding: '20px',
      color: '#4a5568',
      fontSize: '1rem',
      fontWeight: '500',
    },
    badge: {
      padding: '8px 16px',
      borderRadius: '30px',
      fontWeight: '500',
      display: 'inline-block',
    },
    active: {
      backgroundColor: '#48bb78',
      color: '#fff',
    },
    inactive: {
      backgroundColor: '#f56565',
      color: '#fff',
    },
    description: {
      color: '#718096',
      fontSize: '0.9rem',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Service Management</h1>
        <p style={styles.subtitle}>Oversee and manage the various services offered by your organization</p>
      </div>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.tableHeader}>#</th>
            <th style={styles.tableHeader}>Service Name</th>
            <th style={styles.tableHeader}>Description</th>
            <th style={styles.tableHeader}>Status</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr
              key={service.id}
              style={styles.tableRow}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <td style={styles.tableCell}>{service.id}</td>
              <td style={styles.tableCell}>{service.name}</td>
              <td style={styles.tableCell}>{service.description}</td>
              <td style={styles.tableCell}>
                <span
                  style={
                    service.status === 'Active'
                      ? { ...styles.badge, ...styles.active }
                      : { ...styles.badge, ...styles.inactive }
                  }
                >
                  {service.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminServiceManagement;
