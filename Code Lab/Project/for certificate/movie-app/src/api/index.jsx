import axios from "axios";
export const api_key = "ab6883ee25576cc6355b69d367e028a2";

export const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    
});