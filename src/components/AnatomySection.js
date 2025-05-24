import React from 'react';

/**
 * AnatomySection component displays the anatomical illustration with interactive labels and health status indicators.
 * @param {Array} healthStatusIndicators - Array of health status objects with id, label, color, and position for labels.
 */
const AnatomySection = ({ healthStatusIndicators }) => {
  return (
    <div className="anatomy-section">
      <div className="anatomy-image-container" style={{ position: 'relative', width: 180, height: 300 }}>
import anatomicalIllustration from '../assets/anatomical-illustration.svg';

const AnatomySection = ({ healthStatusIndicators }) => {
  return (
    <div className="anatomy-section">
      <div className="anatomy-image-container" style={{ position: 'relative', width: 180, height: 300 }}>
        <img
          src={anatomicalIllustration}
          alt="Anatomical illustration"
          className="anatomy-image"
          width={180}
          height={300}
        />
        {/* Interactive labels */}
        <div
          className="label heart-label"
          style={{
            position: 'absolute',
            top: '40%',
            left: '65%',
            backgroundColor: '#ef4444',
            color: 'white',
            padding: '5px 10px',
            borderRadius: '12px',
            fontSize: '0.75rem',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            cursor: 'pointer',
          }}
          aria-label="Healthy Heart"
        >
          <span>❤️</span>
          <span>Healthy Heart</span>
        </div>
        <div
          className="label leg-label"
          style={{
            position: 'absolute',
            top: '75%',
            left: '20%',
            backgroundColor: '#22c55e',
            color: 'white',
            padding: '5px 10px',
            borderRadius: '12px',
            fontSize: '0.75rem',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            cursor: 'pointer',
          }}
          aria-label="Healthy Leg"
        >
          <span>🦵</span>
          <span>Healthy Leg</span>
        </div>
      </div>
      {/* Health status indicators */}
      <div className="health-indicators">
        {healthStatusIndicators.map((indicator) => (
          <div
            key={indicator.id}
            className={'indicator ' + indicator.label.toLowerCase().replace(/ /g, '-')}
            style={{ color: indicator.color }}
            aria-label={indicator.label}
          >
            {indicator.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnatomySection;
        {/* Interactive labels */}
        <div
          className="label heart-label"
          style={{
            position: 'absolute',
            top: '40%',
            left: '65%',
            backgroundColor: '#ef4444',
            color: 'white',
            padding: '5px 10px',
            borderRadius: '12px',
            fontSize: '0.75rem',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            cursor: 'pointer',
          }}
          aria-label="Healthy Heart"
        >
          <span>❤️</span>
          <span>Healthy Heart</span>
        </div>
        <div
          className="label leg-label"
          style={{
            position: 'absolute',
            top: '75%',
            left: '20%',
            backgroundColor: '#22c55e',
            color: 'white',
            padding: '5px 10px',
            borderRadius: '12px',
            fontSize: '0.75rem',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            cursor: 'pointer',
          }}
          aria-label="Healthy Leg"
        >
          <span>🦵</span>
          <span>Healthy Leg</span>
        </div>
      </div>
      {/* Health status indicators */}
      <div className="health-indicators">
        {healthStatusIndicators.map((indicator) => (
          <div
            key={indicator.id}
            className={'indicator ' + indicator.label.toLowerCase().replace(/ /g, '-')}
            style={{ color: indicator.color }}
            aria-label={indicator.label}
          >
            {indicator.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnatomySection;
