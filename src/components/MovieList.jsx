import React from "react";
import {Link} from "react-router-dom";


export const MovieList = ({movie}) => {
    const country = movie.country.join(", ");
    const genre = movie.genre.join(", ");
    return (
        <Link to={`movie/${movie._id}`} className="grid-item width-1-3">
            <div className="card">
                <div className="card-header">
                    <img src={movie.poster} alt="poster for movie"></img>
                </div>
                <div className="card-cover">
                    <h3>Страна: {country}</h3>
                    <p>Жанр: {genre}</p>
                </div>
                <div className="card-body">
                  <p className="card-title">{movie.title}</p>
                </div>
            </div>
        </Link>
    );
}   