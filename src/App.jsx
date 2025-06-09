import React, { useState } from 'react';

const App = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);

  const styles = {
    header: {
      backgroundColor: '#333',
      color: 'white',
      padding: '15px 30px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'relative',
    },
    menu: {
      position: 'relative',
    },
    menuItem: {
      cursor: 'pointer',
      padding: '10px',
      display: 'inline-block',
    },
    dropdown: {
      position: 'absolute',
      top: '100%',
      left: 0,
      backgroundColor: '#fff',
      color: '#000',
      border: '1px solid #ccc',
      boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
      minWidth: '150px',
      zIndex: 1000,
    },
    dropdownItem: {
      padding: '10px',
      cursor: 'pointer',
      whiteSpace: 'nowrap',
    },
    submenu: {
      position: 'absolute',
      top: 0,
      left: '100%',
      backgroundColor: '#fff',
      border: '1px solid #ccc',
      minWidth: '150px',
      boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
      zIndex: 1000,
    },
  };

  return (
    <div>
      <header style={styles.header}>
        <h2>My Dashboard</h2>
        <div style={styles.menu}>
          <div
            style={styles.menuItem}
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => {
              setShowDropdown(false);
              setShowSubmenu(false);
            }}
          >
            Menu ▾
            {showDropdown && (
              <div style={styles.dropdown}>
                <div style={styles.dropdownItem}>Profile</div>
                <div
                  style={styles.dropdownItem}
                  onMouseEnter={() => setShowSubmenu(true)}
                  onMouseLeave={() => setShowSubmenu(false)}
                >
                  Settings ▸
                  {showSubmenu && (
                    <div style={styles.submenu}>
                      <div style={styles.dropdownItem}>Account</div>
                      <div style={styles.dropdownItem}>Privacy</div>
                    </div>
                  )}
                </div>
                <div style={styles.dropdownItem}>Logout</div>
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default App;

