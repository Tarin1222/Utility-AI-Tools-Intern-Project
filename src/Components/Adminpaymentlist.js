import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Adminpaymentlist = () => {
  // Sample payment data
  const [payments, setPayments] = useState([
    { id: 1, name: 'Farzana Islam', amount: '$200', status: 'Completed', date: '2024-09-15' },
    { id: 2, name: 'Abrar Hossain', amount: '$150', status: 'Pending', date: '2024-09-12' },
    { id: 3, name: 'Yadira Khan', amount: '$300', status: 'Failed', date: '2024-09-10' },
    { id: 4, name: 'Warina Khan', amount: '$400', status: 'Completed', date: '2024-09-08' },
  ]);

  // Styles object
  const styles = {
    container: {
      backgroundColor: '#f4f6f9',
      padding: '40px',
      borderRadius: '10px',
      margin: '20px auto',
      width: '90%',
      maxWidth: '1200px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    },
    header: {
      textAlign: 'center',
      marginBottom: '30px',
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#007bff',
    },
    subtitle: {
      fontSize: '1.2rem',
      color: '#6c757d',
    },
    table: {
      width: '100%',
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    },
    badge: {
      fontSize: '0.9rem',
      padding: '5px 10px',
      borderRadius: '5px',
    },
    success: {
      backgroundColor: '#28a745',
      color: 'white',
    },
    warning: {
      backgroundColor: '#ffc107',
      color: 'white',
    },
    danger: {
      backgroundColor: '#dc3545',
      color: 'white',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Payment List</h1>
        <p style={styles.subtitle}>Manage all payments efficiently</p>
      </div>

      <table className="table table-striped table-hover" style={styles.table}>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <tr key={payment.id}>
              <td>{payment.id}</td>
              <td>{payment.name}</td>
              <td>{payment.amount}</td>
              <td>
                <span
                  style={
                    payment.status === 'Completed'
                      ? { ...styles.badge, ...styles.success }
                      : payment.status === 'Pending'
                      ? { ...styles.badge, ...styles.warning }
                      : { ...styles.badge, ...styles.danger }
                  }
                >
                  {payment.status}
                </span>
              </td>
              <td>{payment.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Adminpaymentlist;
