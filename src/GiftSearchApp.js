import React, { useState } from 'react';
import { GifGrid } from './components/GifGrid';
import { AddCategory } from './components/AddCategory';


export const GiftSearchApp = () => {

    const [categories, setCategories] = useState(['One Piece']);

    return(
        <div>
            <h2>GifSearchApp</h2>
            <hr/>
            
            <AddCategory setCategories={setCategories}/>
            <ol>
                {
                 categories.map((category)=> (
                     <GifGrid
                     key = {category}
                     category={category}
                     />
                 ))
                }
            </ol>
        </div>
    );
    
};