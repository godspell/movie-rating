import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API_URL } from './context';
import { NavLink } from "react-router-dom";

const MovieDetail = () => {

   const { id } = useParams();

   const [isloading, setIsloading] = useState(true);
   const [movie, setMovie] = useState("");

   const getMovies = async (url) => {
     setIsloading(true);
     try {
       const res = await fetch(url);
       const data = await res.json();
       console.log(data);
       if (data.Response === "True") {
         setIsloading(false);
         setMovie(data);
       } else {

       }
     } catch (error) {
       console.log(error);
     }
   };

   useEffect(() => {
     let timeOut = setTimeout(() => {
       getMovies(`${API_URL}&i=${id}`);
     }, 800);

     return () => clearTimeout(timeOut);
   }, [id]);

  if (isloading) {
    return <div className="loading">Loading....</div>;
  }
  return (
  
      <section className="movie-section">
        <div className="movie-card">
          <figure>
            <img src={movie.Poster} alt="" />
          </figure>
          <div className="card-content">
            <p className="title">{movie.Title}</p>
            <p className=""></p>
            <p className="card-text">{movie.Released}</p>
            <p className="card-text">{movie.Genre}</p>
            <p className="card-text">{movie.imdbRating} / 10</p>
            <p className="card-text">{movie.Country}</p>
            <NavLink to="/" className="back-btn">
              Go Back
            </NavLink>
          </div>
        </div>
      </section>

  );
}

export default MovieDetail