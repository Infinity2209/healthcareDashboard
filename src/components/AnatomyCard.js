import React from 'react';

const AnatomyCard = () => {
  return (
    <div className="anatomy-card">
      <div className="anatomy-image">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Human_anatomy_diagram.svg"
          alt="Anatomy"
        />
      </div>
      <div className="tags">
        <div className="tag healthy-heart">Healthy Heart</div>
        <div className="tag lungs">Lungs</div>
        <div className="tag teeth">Teeth</div>
        <div className="tag bone">Bone</div>
      </div>
    </div>
  );
};

export default AnatomyCard;
