import React from "react";
import { useParams } from 'react-router-dom'

const Trailer = ({movies}) => {
    const {id} = useParams();

return (
        movies
        .filter((movie) => movie.id === id)
          .map((movie) => (
            <div style={{textAlign:"center"}}>
            <h3>Movie name: {movie.title}</h3>
            <iframe width="420" height="315"
            src={movie.trailerLink} >
             </iframe> 
            </div>
          ))
);
}
export default Trailer;