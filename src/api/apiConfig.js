const apiConfig={
    baseUrl:"https://api.themoviedb.org/3/",
    apiKey:"c93cf8b9cba5b54cdc9e9e258585c85f",
    originalImage:(imgpath)=>`https://image.tmdb.org/t/p/original/${imgpath}`,
    w500Image:(imgpath)=>`https://image.tmdb.org/t/p/w500/${imgpath}`,
}
export default apiConfig;