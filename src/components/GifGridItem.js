import React from 'react';

export const GifGridItem = ({ id, title, url }) => {
  
  return(
    <div className="card">
      <img 
        className="card-img-top"
        src={url}
        alt={title}
      />
      <p className="card-text">{title}</p>
    </div>
  )
};
