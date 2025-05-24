import React from 'react';

/**
 * HealthCard component displays a health status card with icon, title, date, and progress bar.
 * @param {React.ReactNode} icon - Icon element.
 * @param {string} title - Title of the health status.
 * @param {string} date - Date string.
 * @param {number} progress - Progress percentage (0-100).
 * @param {string} color - Color for progress bar and accent.
 */
const HealthCard = ({ icon, title, date, progress, color }) => {
  return (
    <div className="health-card" style={{
      borderRadius: '16px',
      backgroundColor: '#f9fafb',
      padding: '15px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      width: '220px'
    }}>
      <div className="health-card-header" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div className="icon" style={{ fontSize: '1.5rem', color }}>{icon}</div>
        <div className="title" style={{ fontWeight: '600', fontSize: '1rem', color: '#111827' }}>{title}</div>
      </div>
      <div className="date" style={{ fontSize: '0.75rem', color: '#6b7280' }}>{date}</div>
      <div className="progress-bar" style={{ height: '8px', borderRadius: '8px', backgroundColor: '#e5e7eb', overflow: 'hidden' }}>
        <div style={{ width: `${progress}%`, height: '100%', backgroundColor: color, borderRadius: '8px' }} />
      </div>
    </div>
  );
};

export default HealthCard;
