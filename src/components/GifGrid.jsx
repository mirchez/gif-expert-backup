//import {getGifs} from '../helpers/getGif';
//import { useEffect, useState } from 'react';
import {GifItem} from './../components/GifItem';
import {useFetchGifs}  from './../hooks/useFetchGifs';

export const GifGrid = ({category}) => {
    
    const { gifs  , isLoading } = useFetchGifs(category);

    return (   
        <>
            <h3>{category}</h3>
            {
                isLoading && <h2>Loading...</h2>
            }
            
            <div className='card-grid'>
                {
                    gifs.map( (image) => (
                        <GifItem key={image.id}
                        {...image}/>
                    ))
                }
            </div>

        </>
    )

}




