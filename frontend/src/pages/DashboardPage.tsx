import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './Dashboard.css';

export const DashboardPage: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>DigiSchool Dashboard</h1>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>
      
      <div className="dashboard-content">
        <div className="welcome-card">
          <h2>Welcome back, {user?.firstName}! 👋</h2>
          <p>Your account is set up and ready to go.</p>
          
          <div className="user-info">
            <div className="info-row">
              <span className="label">Name:</span>
              <span className="value">{user?.firstName} {user?.lastName}</span>
            </div>
            <div className="info-row">
              <span className="label">Email:</span>
              <span className="value">{user?.email}</span>
            </div>
            <div className="info-row">
              <span className="label">Role:</span>
              <span className="value role-badge">{user?.role}</span>
            </div>
          </div>
        </div>

        <div className="feature-cards">
          <div className="feature-card">
            <h3>📚 Courses</h3>
            <p>Browse and enroll in courses</p>
            <span className="coming-soon">Coming Soon</span>
          </div>
          
          <div className="feature-card">
            <h3>📊 Progress</h3>
            <p>Track your learning progress</p>
            <span className="coming-soon">Coming Soon</span>
          </div>
          
          <div className="feature-card">
            <h3>🎓 Certificates</h3>
            <p>View your certificates</p>
            <span className="coming-soon">Coming Soon</span>
          </div>
        </div>
      </div>
    </div>
  );
};
