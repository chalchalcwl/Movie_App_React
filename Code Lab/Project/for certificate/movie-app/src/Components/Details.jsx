import React, { use } from "react";
import { Card, Spinner } from "flowbite-react";
import { Link, navigate, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { api, api_key } from "../api";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RemoveSelectMovie, selectMovie } from "../Redux/action/movies";
import { useSelector } from "react-redux";

const Details = () => {
  const { movieId } = useParams();
  const dispatch = useDispatch();

  const movieDetail = async () => {
    const res = await api.get(`/movie/${movieId}?api_key=${api_key}`);
    dispatch(selectMovie(res.data));
  };
  useEffect(() => {
   if(movieId){
    movieDetail();
  }
  return () =>dispatch(RemoveSelectMovie({}));
  }, []);

  let movie = useSelector((state) => state.movies.movie);
  const navigate = useNavigate();
  return (
    <div>
      <div className="container mx-auto ms-5 ">
        <span
          className="my-2"
          style={{ fontSize: "20px" }}
          onClick={() => navigate("/")}
        >
         <i class="fa-solid fa-circle-left"></i>Back
        </span>
      </div>
      {JSON.stringify(movie) == "{}" ? (
        <h1> <Spinner aria-label="Extra large spinner example" size="xl" /></h1>
      ) : (
        <div>
          <Card
            className="max-w-xl mx-auto"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {movie.title}
            </h5>
            <p className="">{movie.overview}</p>
            <div className=" ">
              <span className="bg-black text-white p-2 rounded-xl ">
                <i className="fa-sharp fa-solid fa-star me-2"></i>
                {movie.vote_average}
              </span>
              <span className="ms-2 bg-black text-white p-2 rounded-xl">
                <i className="fa-chisel fa-regular fa-calendar me-3 "></i>
                {movie.release_date}
              </span>
              <span className="ms-2 bg-black text-white p-2 rounded-xl">
                <i className="fa-solid fa-users me-3"></i>
                {movie.vote_count}
              </span>
              <span className="ms-2 bg-black text-white p-2 rounded-xl">
                <i className="fa-solid fa-earth-europe me-3"></i>
                 {movie.production_countries?.[0]?.name}
              </span>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Details;
