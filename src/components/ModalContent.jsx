import React from 'react';
import axios from 'axios';

import {URL_TICKETS} from '../constants';
import {getsortedPLaces} from '../util/getSortedPlaces';
import {getSortedByRow} from '../util/getSortedByRow';
import {getRandomInt} from '../util/getRandomInt';
import {Places} from '../components/Places';
import {Form} from './Form';
import '../assets/style/modal.css';


export class ModalContent extends React.Component {

    state = {
        isLoading: true,
        space: [],
        choosenPlace: null,
        showForm: false,
        user: null,
    };

    componentDidMount() {
        
        axios.get(`${URL_TICKETS}?session=${this.props.session._id}`)
        .then(({data}) => {
            this.setState({isLoading: false});
            this.getPlaceArray(data.space);
        })
        .catch((error) => {
            this.setState({isLoading: false});
            console.error(error);
        });
            
    }

    getPlaceArray = (arr) => {
        
        const sortedByRow = getsortedPLaces(arr,"row");

        const rows = getSortedByRow(sortedByRow);
        const rowsSortedByPlace = rows.map(item => {
                return getsortedPLaces(item, "place");
        });
        this.setState({space:  rowsSortedByPlace.map((item => {
            const random = getRandomInt(2,6);
            return item.map(elem => {
                if (elem.place % random === 0) {
                    return {
                        ...elem,
                        booked: true,
                    }
                }
                return elem;
            });
        }))
    });
      
    };

    handleChoosePlace = (data) => {
        this.setState({choosenPlace: data});
    };

    handleOpenForm = () => {
        this.setState({showForm: true});
    };

    handleClickBuy = (data) => {
        this.setState({user: data});
    };

    render() {
        const {isLoading, space, choosenPlace, showForm, user} = this.state;
        const {session, handleCloseModal} = this.props;
        return(
            <div>
                <div className="modal-control">
                    <div className="modal-content">
                        {isLoading ?  <div className="loader"></div> :<div> 
                        <h4>{session.movie.title}</h4>
                        <p>Зал: {session.room}</p>
                        <p>Время:  {new Date(session.date).toLocaleTimeString().slice(0, -3)}</p>
                        {user ? <div><p>{user.name}, спасибо за покупку</p> <p>Ваш билет на {session.movie.title} ряд: {choosenPlace.row} место: {choosenPlace.place} выслан на почту {user.mail}</p><button className="button btn-cancel" onClick={handleCloseModal}>Close</button></div> : 
                            <React.Fragment>
                                <Places space={space} handleChoosePlace={this.handleChoosePlace} />
                                { choosenPlace && 
                                    <div>
                                        <h3>Ряд: {choosenPlace.row} Место: {choosenPlace.place}</h3>
                                        { showForm ? 
                                            <Form handleSubmitForm={this.handleClickBuy}/>  : 
                                            <div className="button-controller">
                                                <button className="button btn-submit" onClick={this.handleOpenForm}>OK</button>
                                                <button className="button btn-cancel" onClick={handleCloseModal}>Cancel</button>
                                            </div> 
                                        }
                                    </div>
                                }
                            </React.Fragment>
                        }
                    </div>
                    }
                </div>
            </div>
        </div>
        );
    }
};