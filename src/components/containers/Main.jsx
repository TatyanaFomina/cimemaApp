import React from 'react';
import {connect} from 'react-redux';

import {Switch, Route} from 'react-router-dom';
import {getMovies} from '../../actions/movies';
import {MainPageContainer} from './MainPage';
import {MovieContainer} from './Movie';
import {ScheduleContainer} from './Schedule';

import '../../assets/style/Main.css';


class Main extends React.Component {
    
    componentDidMount() {
        this.props.getMovies();
    }

    render() {
        return (
            <main>
                <section className="section-main">
                    <div className="container">
                        <Switch>
                        <Route path={"/"} exact component={MainPageContainer} />
                        <Route path={"/movie/:id"} component={MovieContainer} />
                        <Route path={"/schedule"} component={ScheduleContainer} />
                        </Switch>
                    </div>
                </section>
            </main>
        );
    }
}


const mapDispatchToProps ={
    getMovies
};




export const MainContainer = connect(null,mapDispatchToProps)(Main);

