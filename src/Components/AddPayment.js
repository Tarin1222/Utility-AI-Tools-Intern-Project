import React from 'react';

const AddPayment = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#02031d',
        padding: '10px 20px',
      }}
    >
      <div
        style={{
          maxWidth: '460px',
          boxShadow: '3px 3px 5px #1b1b1ba2',
          backgroundColor: '#413f3f',
          padding: '20px',
          borderRadius: '8px',
          color: 'white',
        }}
      >
        <div style={{ marginBottom: '20px' }}>
          <p style={{ fontSize: '25px', fontWeight: '600' }}>For more exciting AI features use our website.</p>
          <p style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.7)' }}>
            Your Card Details
          </p>
        </div>

        <div
          style={{
            width: '100%',
            height: '180px',
            
            padding: '20px',
            backgroundColor: '#0093E9',
            backgroundImage: 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)',
            position: 'relative',
            borderRadius: '5px',
            boxShadow: '3px 3px 5px #0000001a',
            transition: 'all 0.3s ease-in',
            cursor: 'pointer',
            marginBottom: '20px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <label style={{ display: 'block' }}>
              <div style={{ display: 'flex', position: 'relative' }}>
                <div>
                  <img
                    src="https://www.freepnglogos.com/uploads/visa-inc-logo-png-11.png"
                    alt=""
                    style={{ width: '50px', height: '20px', objectFit: 'fill' }}
                  />
                  <p style={{ marginTop: '10px', marginBottom: '15px', fontWeight: 'bold' }}>Farzana Islam</p>
                </div>
                <div
                  style={{
                    position: 'absolute',
                    top: '6px',
                    right: '0',
                  }}
                >
                  <input
                    type="radio"
                    name="card"
                    id="check"
                    style={{
                      appearance: 'none',
                      width: '20px',
                      height: '20px',
                      backgroundColor: '#eee',
                      position: 'relative',
                      borderRadius: '3px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      outline: 'none',
                    }}
                    onChange={() => {}}
                  />
                </div>
              </div>
            </label>
            <div
              style={{
                marginTop: 'auto',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <p style={{ margin: '0' }}>4989 1237 1234 4532</p>
              <p style={{ margin: '0' }}>01/24</p>
            </div>
          </div>
        </div>

        <div
          style={{
            width: '100%',
            height: '180px',
            padding: '20px',
            backgroundColor: '#21D4FD',
            backgroundImage: 'linear-gradient(116deg, #21D4FD 0%, #B721FF 100%)',
            position: 'relative',
            borderRadius: '5px',
            boxShadow: '3px 3px 5px #0000001a',
            transition: 'all 0.3s ease-in',
            cursor: 'pointer',
            marginBottom: '20px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <label style={{ display: 'block' }}>
              <div style={{ display: 'flex', position: 'relative' }}>
                <div>
                  <img
                    src="https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-png-transparent-svg-vector-bie-supply-0.png"
                    alt="master"
                    style={{ width: '50px', height: '50px', objectFit: 'fill' }}
                  />
                  <p style={{ fontWeight: 'bold' }}>Farzana Islam</p>
                </div>
                <div
                  style={{
                    position: 'absolute',
                    top: '6px',
                    right: '0',
                  }}
                >
                  <input
                    type="radio"
                    name="card"
                    id="check"
                    style={{
                      appearance: 'none',
                      width: '20px',
                      height: '20px',
                      backgroundColor: '#eee',
                      position: 'relative',
                      borderRadius: '3px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      outline: 'none',
                    }}
                    onChange={() => {}}
                  />
                </div>
              </div>
            </label>
            <div
              style={{
                marginTop: 'auto',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <p style={{ margin: '0' }}>5540 2345 3453 2343</p>
              <p style={{ margin: '0' }}>05/23</p>
            </div>
          </div>
        </div>

        <div
          style={{
            width: '100%',
            height: '50px',
            border: '1px solid #0093E9',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#0093E9',
            transition: 'all 0.5s ease',
            fontWeight: '500',
            cursor: 'pointer',
          }}
          onClick={() => {
            // Handle click event
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#0093E9';
            e.target.style.color = '#fff';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = '#0093E9';
          }}
        >
          Book Now
        </div>
      </div>
    </div>
  );
};

export default AddPayment;
