import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Harry Potter']);

  return (
    <>
      <h2>GifExpertApp</h2>      
      <AddCategory setCategories={ setCategories }/>

      <hr />

      <div>
        { 
          categories.map(categoria => (
            <GifGrid 
              key={ categoria } 
              category={ categoria } 
            />
          ))
        }
      </div>
    </>
  );
};

// export default GifExpertApp;
