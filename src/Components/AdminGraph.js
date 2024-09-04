import React from 'react';
import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

const AdminGraph = () => {
  // Data for Bar Chart (Permanent vs Temporary Users)
  const barData = {
    labels: ['Permanent Users', 'Temporary Users'],
    datasets: [
      {
        label: 'User Type',
        data: [2000, 800], // Example data
        backgroundColor: ['#36A2EB', '#FF6384'],
      },
    ],
  };

  // Data for Line Chart (Economic Cost 2024-2026)
  const lineData = {
    labels: ['2024', '2025', '2026'],
    datasets: [
      {
        label: 'Economic Cost',
        data: [50000, 45000, 60000], // Example data
        borderColor: '#36A2EB',
        fill: false,
      },
    ],
  };

  // Data for Pie Chart (Similar Websites vs Utility Tools)
  const pieData = {
    labels: ['Similar Websites', 'Utility Tools'],
    datasets: [
      {
        label: 'Website Usage',
        data: [3000, 5000], // Example data
        backgroundColor: ['#FF6384', '#1A2EB'],
      },
    ],
  };

  // Data for Doughnut Chart (Time Spent on Different Tools)
  const doughnutData = {
    labels: ['Image Editing', 'AI Tryout', 'Image Generation'],
    datasets: [
      {
        label: 'Time Spent (Hours)',
        data: [120, 200, 150], // Example data
        backgroundColor: ['#FFCE56', '#36A1EB', '#TA2230'],
      },
    ],
  };

  return (
    <div style={{ padding: '5px', backgroundColor: '#02131d', minHeight: '50vh', color: 'white' }}>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Admin Graphs</h2>

      <div style={{ marginBottom: '30px' }}>
        <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Permanent Users vs Temporary Users</h3>
        <Bar data={barData} />
      </div>

      <div style={{ marginBottom: '30px' }}>
        <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Total Economic Cost (2024-2026)</h3>
        <Line data={lineData} />
      </div>

      <div style={{ marginBottom: '30px' }}>
        <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Similar Websites vs Utility Tools</h3>
        <Pie data={pieData} />
      </div>

      <div>
        <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Time Spent on Different Tools</h3>
        <Doughnut data={doughnutData} />
      </div>
    </div>
  );
};

export default AdminGraph;
