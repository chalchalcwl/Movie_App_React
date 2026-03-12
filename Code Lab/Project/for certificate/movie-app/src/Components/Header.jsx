import React, { useRef } from "react";
import { Navbar, Button, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import { api, api_key } from "../api";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../Redux/action/movies";
const Header = () => {
  const movieName = useRef("");
  const dispatch = useDispatch();
  const searchMovie = async () => {
    console.log(movieName.current.value);
    if (movieName.current.value !== "") {
      const res = await api.get(
        `/search/movie?api_key=${api_key}&query=${movieName.current.value}`,
      );
      dispatch(fetchMovies(res.data.results));
      console.log(res.data.results);
    } else {
      const res = await api.get(
        `/movie/now_playing?api_key=ab6883ee25576cc6355b69d367e028a2`,
      );
      dispatch(fetchMovies(res.data.results));
    }
  };
  return (
    <div>
      <Navbar className="" fluid rounded>
        <Link to="/">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Movie Channel
          </span>
        </Link>
        <div className="flex md:order-2">
          <form
            action=""
            className="text-black flex items-center justify-center"
          >
            <TextInput placeholder="Search..." ref={movieName} />

            <Button
              className="ms-2"
              onClick={() => searchMovie()}
              color="dark"
              type="button"
            >
              Click
            </Button>
          </form>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
