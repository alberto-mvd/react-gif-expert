import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'One Punch']);

  const onAddCategory = ( newCategory ) => {
    const value = newCategory.toLowerCase();
    if ( categories.map(c=>c.toLowerCase()).includes(value) ) return;
    
    setCategories( cat => [ newCategory, ...cat ]);
  }

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory 
        onNewCategory={ onAddCategory }
      />

      { 
        categories.map( ( category ) => (
          <GifGrid 
            key={ category } 
            category={ category }/>
        ))
      }

    </>
  )
}
