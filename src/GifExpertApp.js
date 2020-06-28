import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Categoria 1', 'Categoria 2', 'Categoria 3']);

  const handleAdd = () => {
    setCategories([...categories, 'Harry Potter']);
  };

  return (
    <>
      <h2>GifExpertApp</h2>      
      <AddCategory setCategories={ setCategories }/>

      <hr />

      <ol>
        { 
          categories.map(categoria => <li key= {categoria}> {categoria} </li>)
        }
      </ol>
    </>
  );
};

// export default GifExpertApp;
