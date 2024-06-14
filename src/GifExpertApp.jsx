import {AddCategory, GifGrid} from './components';
import { useState } from 'react'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Rick and Morty'])

    const onAddCategory = (newCategory, categories) => {

        !(categories.includes(newCategory)) && setCategories([newCategory, ...categories])
    }
        
return (    
        <>
            <h1>Gif Finder</h1>

            <AddCategory categories={categories} onNewCategory = {onAddCategory} />
            
            <ol>
                { 
                
                    categories.map( (category, i) =>(
                        <GifGrid
                            key={category + i}
                            category={category}/>
                    )) 
                }
            </ol>

        </>
    )
}

