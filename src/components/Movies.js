import React  from "react";
// import { v5 as id } from "uuid"
import { movies } from "../data";

function Movies() {
  // const keyId = id()
  const movie = movies.map(movie => <div key={movie.title}>
    <h3>Name: {movie.title}</h3>
    <p>Time: {movie.time}</p>
    <ul>{movie.genres.map(genre => <li key={genre + movie.time}>{genre}</li>)}</ul>
    </div>)
      
  return (
    <div>
      <h1>Movies Page</h1>
      {movie}
    </div>
  );
}

export default Movies;
