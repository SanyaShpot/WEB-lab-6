import React from 'react';

const ContentBlock = ({ imageSrc, title, text }) => {
  return (
    <div className="content-block">
      <img src={imageSrc} alt={title} className="content-image" />
      <h2 className="content-title">{title}</h2>
      <p className="content-text">{text}</p>
    </div>
  );
};

export default ContentBlock;
