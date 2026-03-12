import React, { use } from "react";
import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";


const Movies = () => {
const movies = useSelector((state) => state.movies.movie);
  return (
    <div className="container ms-5">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-2">
      {
        movies.length >0 ? movies.map((movie) => <MovieCard key={movie.id} movie={movie} />) : "No Movies Found"
      }
      </div>
       
    </div>
  );
};

export default Movies;