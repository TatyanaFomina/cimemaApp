import React from 'react';
import {connect} from 'react-redux';
import {MovieList} from '../MovieList';
import {SimpleSwiperWithParams} from '../Swiper';


export const MainPage = ({movies}) => {
    console.log(movies);
    return (
        <div className="grid">
          {movies.map(item => <MovieList key= {item._id} movie={item}></MovieList>)}
        </div>
    );
};

const mapToStateProps = (state) => ({
    movies: state.data.movies
});

export const MainPageContainer = connect(mapToStateProps)(MainPage);