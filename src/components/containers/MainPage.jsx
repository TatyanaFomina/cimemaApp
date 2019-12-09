import React, {useState} from 'react';
import {connect} from 'react-redux';
import {MovieList} from '../MovieList';
import {Filter} from '../Filter';


const MainPage = ({movies, genres}) => {
    const [filteredMovies, setFilteredMovies] = useState([]);

    return (<div className="grid">
        <Filter movies={movies} genres={genres} setFilteredMovies={setFilteredMovies} />
        {filteredMovies.length ? filteredMovies.map(item => <MovieList key= {item._id} movie={item}></MovieList>) : movies.map(item => <MovieList key= {item._id} movie={item}></MovieList>)}
        </div>
    );
};

const mapToStateProps = (state) => ({
    movies: state.data.movies,
    genres: state.data.genres,
});

export const MainPageContainer = connect(mapToStateProps)(MainPage);