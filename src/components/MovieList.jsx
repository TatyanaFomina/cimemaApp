import React from "react";
import {Link} from "react-router-dom";


export const MovieList = ({movie}) => {
    return (
        <Link to={`movie/${movie._id}`} className="grid-item width-1-3">
            <div className="card">
                <div className="card-header">
                    <img src={movie.poster} alt="poster for movie"></img>
                </div>
                <div className="card-cover">
                    <h3>Страна: {movie.country}</h3>
                    <p>Жанр:{movie.genre}</p>
                </div>
                <div className="card-body">
                  <h2 className="card-title">{movie.title}</h2>
                </div>
            </div>
        </Link>
    );
}   