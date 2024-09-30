import React from 'react';
import './AddPayment.css';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import BkashImage from '../Assets/B-kash.jpg'; // Renamed to BkashImage to avoid conflict
import Nogod from '../Assets/Nogod.jpg';
import EBL from '../Assets/eastern-bank-limited.jpg';
import MasterCard from '../Assets/mastercard.png';
import UCB from '../Assets/UCB.png';
import BankAsia from '../Assets/BankAsia.webp';
import ProjectLogo from '../Assets/Logo.jpg'; // Add your project logo
import SupportIcon from '../Assets/support.png'; // Add support icon
import FAQIcon from '../Assets/FAQ.png'; // Add FAQ icon
import OffersIcon from '../Assets/offer.png'; // Add Offers icon

const AddPayment = () => {
  const navigate = useNavigate(); // Hook for programmatic navigation

  const banks = [
    {
      name: 'Bkash',
      holder: 'Farzana Islam',
      number: '1234 5678 1234 5678',
      expiry: '12/26',
      logo: BkashImage, // Updated to use the renamed image import
      gradient: 'linear-gradient(160deg, #ff7e5f 0%, #feb47b 100%)',
      navigateTo: '/bkash', // Define the route for this card
    },
    {
      name: 'Nogod',
      holder: 'Farzana Islam',
      number: '9876 5432 1987 6543',
      expiry: '11/24',
      logo: Nogod,
      gradient: 'linear-gradient(160deg, #00c9ff 0%, #92fe9d 100%)',
    },
    {
      name: 'EBL',
      holder: 'Farzana Islam',
      number: '5678 1234 9876 5432',
      expiry: '10/25',
      logo: EBL,
      gradient: 'linear-gradient(160deg, #667eea 0%, #764ba2 100%)',
    },
    {
      name: 'MasterCard',
      holder: 'Farzana Islam',
      number: '5432 8765 4321 8765',
      expiry: '05/23',
      logo: MasterCard,
      gradient: 'linear-gradient(160deg, #f953c6 0%, #b91d73 100%)',
    },
    {
      name: 'UCB',
      holder: 'Farzana Islam',
      number: '4567 2345 8765 1234',
      expiry: '01/25',
      logo: UCB,
      gradient: 'linear-gradient(160deg, #30cfd0 0%, #330867 100%)',
    },
    {
      name: 'Bank Asia',
      holder: 'Farzana Islam',
      number: '9876 5432 1098 7654',
      expiry: '07/26',
      logo: BankAsia,
      gradient: 'linear-gradient(160deg, #0093e9 0%, #80d0c7 100%)',
    },
  ];

  const handleCardClick = (bank) => {
    if (bank.navigateTo) {
      navigate(bank.navigateTo); // Navigate to the specified route
    }
  };

  return (
    <div className="main-container">
      {/* New Top Section with Project Logo and Icons */}
      <div className="top-section">
        <img src={ProjectLogo} alt="Project Logo" className="project-logo" />

        <div className="info-icons">
          <div className="info-icon">
            <img src={SupportIcon} alt="Support" />
            <p>Support</p>
          </div>
          <div className="info-icon">
            <img src={FAQIcon} alt="FAQ" />
            <p>FAQ</p>
          </div>
          <div className="info-icon">
            <img src={OffersIcon} alt="Offers" />
            <p>Offers</p>
          </div>
        </div>
      </div>

      {/* Add a border below the top section */}
      <hr className="separator-line" />

      {/* Bank Cards Section */}
      <div className="payment-container">
        {banks.map((bank, index) => (
          <div
            key={index}
            className="payment-card"
            onClick={() => handleCardClick(bank)} // Handle card click
          >
            <div
              className="card-details"
              style={{ backgroundImage: bank.gradient }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <label>
                  <div style={{ display: 'flex', position: 'relative' }}>
                    <div>
                      <img src={bank.logo} alt={bank.name} className="bank-logo" />
                      <p className="card-holder">{bank.holder}</p>
                    </div>
                    <div
                      style={{
                        position: 'absolute',
                        top: '6px',
                        right: '0',
                      }}
                    >
                      <input type="radio" name="card" className="radio-button" onChange={() => {}} />
                    </div>
                  </div>
                </label>
                <div className="card-footer">
                  <p>{bank.number}</p>
                  <p>{bank.expiry}</p>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="book-now" onClick={() => {}}>
          Book Now
        </div>
      </div>
    </div>
  );
};

export default AddPayment;
