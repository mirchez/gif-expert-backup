import { useState, useEffect } from "react";
import {getGifs} from './../helpers/getGifs';

export const useFetchGifs = (category) => {

    const [gifs, setGifs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const gifSetter = async() =>{
        const gif = await getGifs(category)
        setGifs(gif)
        setIsLoading(false)
    }

    useEffect(() => {
        gifSetter()
    }, []);

return (
        {
            gifs,
            isLoading,
        }
  )
}
