import React, { useState, useEffect } from 'react';
import { GifGridItem } from './GifGridItem';
import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {
  // estado
  const [images, setImages] = useState([]);

  useEffect( () => {
    getGifs(category)
      .then(setImages)
  }, [category]); // al mandarle [] indica que solo se ejecutara cuando se renderiza por primera vez el componente

  return(
    <>
      <h3>{ category }</h3>      
      <div className="card-grid">
          { 
            images.map(img => (
              <GifGridItem 
                key={img.id}
                { ...img }
              />
            ))
          }
      </div>
    </>
  );
};
