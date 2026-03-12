import React from "react";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

const MovieCard = ({ movie }) => {
  // console.log(movie);
  return (
    <div>
      <Link to={`/movies/details/${movie.id}`}>
        <div className="  ">
          <div className=" ms-4 me-4 flex flex-row md:col-span-4 lg:col-span-3 gap-4  justify-center ">
            <Card
              className="max-w-md h-100  hover:shadow-2xl hover:shadow-gray-500/50"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {movie.title}
              </h5>
              <p className="">{movie.overview.slice(0, 100)}</p>
              <div className=" ">
                <span className="bg-black text-white p-2 rounded-xl ">
                  <i className="fa-sharp fa-solid fa-star me-2"></i>
                  {movie.vote_average}
                </span>
              <span className="ms-2 bg-black text-white p-2 rounded-xl">  <i className="fa-chisel fa-regular fa-calendar me-3 "></i>{movie.release_date}</span>
              </div>
            </Card>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
