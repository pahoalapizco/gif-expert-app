import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
  // custom hook es el que tiene la logica y el estado.
  // De esta forma el código del componente queda mas prolijo.
  const { data: images, loading} = useFetchGifs({ category  });
  
  return(
    <>      
      { !loading &&  <h3>{ category }</h3> }  
      { loading && 'Loading....' }  
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
