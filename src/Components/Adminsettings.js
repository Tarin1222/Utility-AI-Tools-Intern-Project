import React, { useState } from 'react';

const AdminSettings = () => {
  // Sample settings data with toggle options
  const [settings, setSettings] = useState([
    
    { id: 2, name: 'Admin Email', value: 'farzana@daydream.com', editable: true },
    { id: 3, name: 'Private Account', value: false, editable: false },
    { id: 4, name: 'Notifications', value: true, editable: false },
    { id: 5, name: 'Facebook Friends Join', value: false, editable: false },
    { id: 6, name: 'Friends like my activity', value: false, editable: false },
    { id: 7, name: 'Auto play videos', value: false, editable: false },
  ]);

  // Handle toggle changes
  const handleToggle = (id) => {
    setSettings((prevSettings) =>
      prevSettings.map((setting) =>
        setting.id === id ? { ...setting, value: !setting.value } : setting
      )
    );
  };

  // Styles object
  const styles = {
    container: {
      backgroundColor: '#f7fafc',
      padding: '40px',
      borderRadius: '12px',
      margin: '30px auto',
      width: '80%',
      maxWidth: '900px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    },
    header: {
      textAlign: 'center',
      marginBottom: '30px',
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#2d3748',
    },
    subtitle: {
      fontSize: '1.2rem',
      color: '#718096',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
    },
    tableRow: {
      backgroundColor: '#ffffff',
      transition: 'background-color 0.3s ease',
    },
    tableCell: {
      padding: '15px',
      color: '#4a5568',
      fontSize: '1rem',
      borderBottom: '1px solid #e2e8f0',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    toggle: {
      width: '50px',
      height: '24px',
      borderRadius: '50px',
      backgroundColor: '#ccc',
      position: 'relative',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    toggleIndicator: {
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      backgroundColor: 'white',
      position: 'absolute',
      top: '2px',
      transition: 'transform 0.3s ease',
    },
    activeToggle: {
      backgroundColor: '#4caf50',
    },
    activeIndicator: {
      transform: 'translateX(26px)',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Admin Settings</h1>
        <p style={styles.subtitle}>Manage application's settings</p>
      </div>

      <table style={styles.table}>
        <tbody>
          {settings.map((setting) => (
            <tr key={setting.id} style={styles.tableRow}>
              <td style={styles.tableCell}>
                {setting.name}
                {setting.editable ? (
                  <input
                    type="text"
                    value={setting.value}
                    onChange={(e) =>
                      setSettings((prev) =>
                        prev.map((s) =>
                          s.id === setting.id ? { ...s, value: e.target.value } : s
                        )
                      )
                    }
                  />
                ) : (
                  <div
                    style={{
                      ...styles.toggle,
                      ...(setting.value ? styles.activeToggle : {}),
                    }}
                    onClick={() => handleToggle(setting.id)}
                  >
                    <div
                      style={{
                        ...styles.toggleIndicator,
                        ...(setting.value ? styles.activeIndicator : {}),
                      }}
                    ></div>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminSettings;
