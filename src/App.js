import React, { useEffect, useState } from "react";

import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

const App = () => {
  const OMDB_API = "https://www.omdbapi.com/?apikey=94963987";
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${OMDB_API}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return (
    <div className="app">
      <h2>MoviesLand</h2>
      <div className="search">
        <input
          placeholder="search for movies"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <img
          src={SearchIcon}
          alt="Search Icon"
          onClick={() => {
            searchMovies(search);
          }}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.imdbID} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movie Found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
