import React from "react";
import { actors } from "../data";

function Actors() {

  const actor = actors.map(actor => <div key={actor.name}>{actor.name} <ul>{actor.movies.map(movie => <li key={movie}>{movie}</li>)}</ul></div>)
  return ( 
  <div>
    <h1>Actors Page</h1>
    {actor}
  </div>
  )
}

export default Actors;
