import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const SearchMovie = () => {
  const [moviesData, setmoviesData] = useState([]);
  const [query, setquery] = useState("");

  const searchMovie = async () => {
    //query params.
    const res = await axios.get(
      //"http://www.omdbapi.com/?apikey=9d57be0b&s=avatar"
      "http://www.omdbapi.com/?apikey=yourid0b&s=" + query
    );
    console.log(res.data);
    console.log(res.data.Search);
    //searchMovie(res.data.Search)
    setmoviesData(res.data.Search);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Search Movie</h1>
      <input
        type="text"
        onChange={(event) => {
          setquery(event.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          searchMovie();
        }}
      >
        search
      </button>
      <div class="container mt-4">
        <div class="row">
          <div class="col-md-2">
            {moviesData?.map((movie) => {
              return (
                <div class="card">
                  <Link to={`/moviedetail/${movie.imdbID}`}>
                    <img src={movie.Poster} class="card-img-top" alt="Image" />
                  </Link>
                  <div class="card-body">
                    <h5 class="card-title">{movie.Title}</h5>
                    <p class="card-text">{movie.Year}</p>
                    <p class="card-text">{movie.imdbID}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
