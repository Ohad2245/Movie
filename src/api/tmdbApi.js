import axiosClient from "./axiosClient";
import apiConfig from './apiConfig';

export const category = {
    movie: 'movie',
    tv: 'tv'
}

export const movieType = {
    upcoming: 'upcoming',
    popular: 'popular',
    top_rated: 'top_rated'
}

export const tvType ={
    popular : 'popular',
    top_rated:'top_rated',
    on_the_air:'on_the_air'
}

const apiKey = `?apiKey=${apiConfig.apiKey}`

const tmdbApi = {
    getMoviesList : (type,params) =>{
        const url = 'movie/' + movieType[type] + apiKey;
        return axiosClient.get(url,params);
    },
    getTvList : (type,params) =>{
        const url = 'tv/' + tvType[type] + apiKey;
        return axiosClient.get(url,params);
    },
    getVideos : (cate,id) =>{
        const url =  category[cate] + '/' + id + '/videos' + apiKey;
        return axiosClient.get(url,{params:{}});
    },
    search : (cate, params) =>{
        const url = 'search/' + category[cate] + apiKey;
        return axiosClient.get(url,params);
    },
    detail : (cate,id, params) =>{ 
        const url = '/' + category[cate] + '/' +id + apiKey;
        return axiosClient.get(url,params);
    },
    credits : (cate,id) =>{
        const url = '/' + id + '/credits' + apiKey;
        return axiosClient.get(url,{params : {}});
    },
    similar : (cate,id) =>{
        const url = category[cate] + '/' + id + '/similar' + apiKey;
        return axiosClient.get(url,{params:{}});
    },
}
export default tmdbApi;

