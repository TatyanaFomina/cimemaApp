import React, {useState} from 'react';
import {connect} from 'react-redux';
import {MovieList} from '../MovieList';
import {SimpleSwiperWithParams} from '../Swiper';
import {Filter} from '../Filter';


const MainPage = ({movies, genres, isLoading}) => {
    const [filteredMovies, setFilteredMovies] = useState([]);

    if(isLoading) {
        return <div className="loader"></div>
    }

    return (<div className="grid">
        <Filter movies={movies} genres={genres} setFilteredMovies={setFilteredMovies} />
        {filteredMovies.length ? filteredMovies.map(item => <MovieList key= {item._id} movie={item}></MovieList>) : movies.map(item => <MovieList key= {item._id} movie={item}></MovieList>)}
        </div>
    );
};

const mapToStateProps = (state) => ({
    movies: state.data.movies,
    genres: state.data.genres,
    isLoading: state.loading.isLoading,
});

export const MainPageContainer = connect(mapToStateProps)(MainPage);