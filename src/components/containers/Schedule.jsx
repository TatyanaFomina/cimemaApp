import React from 'react';
import {connect} from "react-redux";
import {getSessions} from '../../actions/sessions';
import {DATE_OPTIONS} from '../../constants';

import {SessionsBlock} from "../SessionsBlock";



class Schedule extends React.Component {
   componentDidMount () {
    this.props.getSessions();
   }

   getSessions = () => {
      const {movies, rooms, sessions} = this.props;
     
      const sessionArr =  movies.length && sessions.length  && rooms.length  ? sessions.map(item => {
        return item.map(elem => ({
            ...elem, 
            room: rooms.find(room => room._id === elem.room).name,
            movie: movies.find(movie => movie._id == elem.movie),
        }))
      }) : [];

      return sessionArr.map(item => {
        return item.filter(elem => elem.movie);
      });
      
    };

    render() {
        const {isLoading} = this.props;
        
        
        if (isLoading) {
            return <div className="loader"></div>
        }
        
        return (
            <div> 
                {this.getSessions().map((item, i) => (
                    <div className="card-sessions">
                        <h3 className="card-name">{new Date(item[0].date).toLocaleString("ru", DATE_OPTIONS)}</h3>
                        <SessionsBlock key={i} moviesOnDate={item} />
                    </div>
                    ))}
            </div>
            );
    }
}

const mapStateToProps = (state) => ({
    sessions: state.data.sessions,
    isLoading: state.loading.isLoading,
    movies: state.data.movies,
    rooms: state.data.rooms,
});

const mapDispatchToProps = {
    getSessions
};

export const ScheduleContainer = connect(mapStateToProps, mapDispatchToProps)(Schedule);