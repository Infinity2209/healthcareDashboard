import React from 'react';
import HealthCard from './HealthCard';

const HealthStatusCards = () => {
  const cards = [
    { title: 'Lungs', date: '26 Oct 2021', progress: 70, color: '#ef4444', icon: '🫁' },
    { title: 'Teeth', date: '26 Oct 2021', progress: 85, color: '#22c55e', icon: '🦷' },
    { title: 'Bone', date: '26 Oct 2021', progress: 40, color: '#6b7280', icon: '🦴' },
  ];

  return (
    <div className="health-status-cards" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {cards.map((card) => (
        <HealthCard
          key={card.title}
          icon={card.icon}
          title={card.title}
          date={card.date}
          progress={card.progress}
          color={card.color}
        />
      ))}
    </div>
  );
};

export default HealthStatusCards;
