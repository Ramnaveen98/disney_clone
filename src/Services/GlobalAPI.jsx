import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3"
const api_key = "361f38d5e0efe2713095fe851efd809a"

const getTrendingVedios = axios.get(movieBaseUrl + "/trending/all/day?api_key=" +api_key);

//https://api.themoviedb.org/3/trending/all/day?api_key=361f38d5e0efe2713095fe851efd809a
export default{
    getTrendingVedios
}



//https://api.themoviedb.org/3/trending/all/day?api_key=361f38d5e0efe2713095fe851efd809ae7
//https://api.themoviedb.org/3/trending/all/day?api_key=361f38d5e0efe2713095fe851efd809a