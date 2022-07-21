const apiConfig ={
    baseUrl: 'https://api.themoviedb.org/3/',
    // baseUrl: 'https://api.themoviedb.org/3/movie/popular?api_key=e32913cbd025f9075ee90653b6690d2c',
    apiKey:'e32913cbd025f9075ee90653b6690d2c',
    apiToken:'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMzI5MTNjYmQwMjVmOTA3NWVlOTA2NTNiNjY5MGQyYyIsInN1YiI6IjYyYzY5MTQ0YzE2MDZhMDJkYWY5ZmNmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MbjVg0wZCw6oHrQzTA6uels1Gl0pa1hJ4W3sqQh6eQ4',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;