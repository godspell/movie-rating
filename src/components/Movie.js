import React from 'react'
import { useGlobalcontext } from './context'
import { NavLink } from "react-router-dom";

const imgUrl = "https://via.placeholder.com/200/200";

const Movie = () => {
const { movie, isloading } = useGlobalcontext();

if (isloading) {
  return <div className="loading">Loading....</div>
}
  return (
    <div>
      <section className="movie-page">
        <div className="container grid grid-4-col">
          {movie
            ? movie.map((curMovieElem) => {
                const { imdbID, Title, Poster } = curMovieElem;
                const movieName = Title.substring(0, 15);

                return (
                  <NavLink to={`movie/${imdbID}`} key={imdbID}>
                    <div className="card">
                      <div className="card-info">
                        <h2>
                          {movieName.length > 13
                            ? `${movieName}...`
                            : movieName}
                        </h2>
                        <img src={Poster === "N/A" ? imgUrl : Poster} alt="#" />
                      </div>
                    </div>
                  </NavLink>
                );
              })
            : ""}
        </div>
      </section>
    </div>
  );
}

export default Movie