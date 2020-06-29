import React, { useState, useEffect } from 'react';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
  // estado
  const [images, setImages] = useState([]);

  // Funciones
  const getGifs = async () => {
    const URL = `http://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=CUx2xEU29TBOItE2I0YdinTSVRl2NHdq`;
    const resp = await fetch(URL);
    const { data } = await resp.json();

    const gifs = data.map(img => ({
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url
    }));
    
    setImages(gifs);
  };

  useEffect(() => {
    getGifs();
  }, []); // al mandarle [] indica que solo se ejecutara cuando se renderiza por primera vez el componente

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
