import React from "react";
import {connect} from "react-redux";


class Movie extends React.Component {

    state = {
        movie: {}
    };

    componentDidMount() {
        const {match, movies} = this.props;
        const movieId = match.params.id;
        const movie = movies.find(item => item._id === movieId);

        this.setState({movie});
    }

    getInfoByArray = (arr) => {
        if(arr[arr.length-1]) {
            return arr.join(", ");
        } else {
            return arr.join(", ").slice(0, -2);
        }
    };

    render () {
        const {movie} = this.state;
        
    
        return (
           <section className="section-film">
               <h2 className="section-film-title">{movie.title}</h2>
               <div className="grid">
               <div className="grid-item left-card width-1-2">
               <figure className="card-image">
                   <img src={movie.poster} alt="poster" className="card-poster"/>
                </figure>
                  <div className="button-controller">
                       <button className="button">Buy ticket</button>
                  </div>
               </div>
               <div className="grid-item right-card width-1-2">
                    <ul className="list card-list">
                        <li><b>Актёры:</b> {movie.actors ? this.getInfoByArray(movie.actors) : ""}</li>
                        <li><b>Жанр:</b> {movie.genre ? this.getInfoByArray(movie.genre) : ""}</li>
                        <li><b>Страна:</b> {movie.country ? this.getInfoByArray(movie.country) : ""}</li>
                        <li><b>Язык:</b> {movie.language}</li>
                        <li><b>Возрастные ограничения:</b> {movie.age ? `${movie.age}+` : "0+"}</li>
                        <li><b>Сюжет:</b> {movie.description}</li>
                        <li><b>Трейлер:</b> <iframe src={movie.trailer} allowFullScreen/></li>
                    </ul>
               </div>
               </div>
               
           </section>
        )
    };
}


const mapStateToProps = (state) => ({
    movies: state.data.movies
});

export const MovieContainer = connect(mapStateToProps)(Movie);
