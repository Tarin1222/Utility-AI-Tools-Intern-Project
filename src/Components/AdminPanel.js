import React from 'react';
import { useNavigate } from 'react-router-dom';
import user from '../Assets/user.png';
import graph from '../Assets/rainbow-bar-graph.jpg';
import service from '../Assets/Service-Management-1.jpg';
import team from '../Assets/team-mms.jpg';
import settings from '../Assets/settings.png';
import payment from '../Assets/payment.png';
import activity from '../Assets/activity.webp';

const AdminPanel = () => {
  const navigate = useNavigate();

  // Handlers for the menu links
  const handleMenuClick = (route) => {
    navigate(route);
  };

  // Data for the cards
  const cardData = [
    { id: 1, title: 'Graphs', image: graph, route: '/adminGraph' },
    { id: 2, title: 'User List', image: user, route: '/userList' },
    { id: 3, title: 'Payment List', image: payment, route: '/paymentList' },
    { id: 4, title: 'Settings', image: settings, route: '/settings' },
    { id: 5, title: 'Team Management', image: team, route: '/teamManagement' },
    { id: 6, title: 'Text to Image Activity', image: activity, route: '/textToImageActivity' },
    { id: 7, title: 'Service Management', image: service, route: '/serviceManagement' },
  ];

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
          {cardData.map((item) => (
            <p
              key={item.id}
              style={{
                marginBottom: '20px',
                cursor: 'pointer',
                transition: 'color 0.3s',
              }}
              onClick={() => handleMenuClick(item.route)}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#00bfff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'white')}
            >
              {item.title}
            </p>
          ))}
        </div>
      </div>

      {/* Right Div */}
      <div
        style={{
          width: '75%',
          padding: '20px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          justifyContent: 'flex-start',
        }}
      >
        {cardData.map((card) => (
          <div
            key={card.id}
            onClick={() => navigate(card.route)}
            style={{
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
              cursor: 'pointer',
              width: 'calc(33% - 20px)', // Adjust width to fit 3 cards per row with gaps
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              transition: 'transform 0.3s, box-shadow 0.3s',
              border: '2px solid #ccc',
              marginBottom: '20px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0px 0px 20px rgba(0, 0, 0, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.1)';
            }}
          >
            <img
              src={card.image}
              alt={`${card.title} Icon`}
              style={{
                width: '100%',
                height: '150px',
                objectFit: 'cover', // Ensure image covers the container
                borderRadius: '4px',
                marginBottom: '10px',
              }}
            />
            <h3 style={{ textAlign: 'center' }}>{card.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
