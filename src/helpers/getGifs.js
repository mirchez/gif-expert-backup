export const getGifs = async (category) =>{
    const apiKey = 'RNWxRPSmwgXaF9m4vMgWBknCAyX0uLXb'
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=10`
    const resp = await fetch(url)
    const { data } = await resp.json();
    
    const gif = data.map( img => ({
        id: img.id,
        title : img.title,
        url : img.images.downsized_medium.url
    }))

    return gif;
}