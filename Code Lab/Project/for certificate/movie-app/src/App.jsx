import React from "react";
import { Alert } from "flowbite-react";
import Header from "./Components/Header";
import "./index.css";
import Movies from "./Components/Movies";
import { Route, Routes } from "react-router";
import Home from "./Components/Home";
import NotFoundPage from "./Components/NotFoundPage";
import Details from "./Components/Details";
import "./index.css";

const App = () => {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/movies/details/:movieId" element={<Details />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
