import React from 'react';

const SimpleAppointmentCard = ({ title, time }) => {
  return (
    <div className="simple-appointment-card">
      <div className="icon-indicator" style={{
        width: '12px',
        height: '12px',
        borderRadius: '50%',
        backgroundColor: '#1a237e',
        marginRight: '10px',
      }}></div>
      <div className="appointment-info">
        <div className="title">{title}</div>
        <div className="time">{time}</div>
      </div>
    </div>
  );
};

export default SimpleAppointmentCard;
