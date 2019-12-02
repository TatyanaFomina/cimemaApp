import React from "react";
import {connect} from "react-redux";

class Movie extends React.Component {

    state = {
        movie: null
    }

    componentDidMount() {
        const {match, movies} = this.props;
        const movieId = this.props.match.params.id;
        const movie = movies.find(item => InputEvent._id ===movieId);

        this.setState({movie});
    }

    render () {
        return (
           <div></div>
        )
    };
}


const mapToStateProps = (state) => ({
    movies: state.data.movies
});

export const MovieContainer = connect(mapToStateProps)(Movie);
