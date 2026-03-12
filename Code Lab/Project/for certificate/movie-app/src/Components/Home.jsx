import React, { useEffect } from "react";
import { Navbar } from "flowbite-react";
import Movies from "./Movies";
import { api, api_key } from "../api";
import { fetchMovies } from "../Redux/action/movies";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatchEvent = useDispatch();
  const getMovies = async () => {
    const res = await api.get(
      `/movie/now_playing?api_key=ab6883ee25576cc6355b69d367e028a2`,
    );
    dispatchEvent(fetchMovies(res.data.results));
  };
  useEffect(() => {
    getMovies();
  });
  return (
    <div>
      <Movies />
    </div>
  );
};

export default Home;
