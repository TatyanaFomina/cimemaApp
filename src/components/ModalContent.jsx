import React from 'react';
import axios from 'axios';

import {URL_TICKETS} from '../constants';
import {getsortedPLaces} from '../util/getSortedPlaces';
import {getSortedByRow} from '../util/getSortedByRow';
import {getRandomInt} from '../util/getRandomInt';
import '../assets/style/modal.css';


export class ModalContent extends React.Component {

    state = {
        isLoading: true,
        space: [],
    }

    componentDidMount() {
        axios.get(`${URL_TICKETS} ? session=${this.props.session._id}`)
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
                        booked: true
                    }
                }
                return elem;
            });
        }))
    });
      
    };

    render() {
        const {isLoading} = this.state;
        const {session} = this.props;
        return(<div>
            <div className="modal-control">
                <div className="modal-content">
                {isLoading ?  <div className="loader"></div> :<div> 
                    <p>{session.movie.title}</p>
                    <p>Зал: {session.room}</p>
                    <p>Время:  {new Date(session.date).toLocaleTimeString().slice(0, -3)}</p>
                    <div className="button-controller">
                        <button className="button btn-submit">OK</button>
                        <button className="button btn-cancel">Cancel</button>
                    </div> </div>}
                    
                </div>
            </div>
            </div>
        );
    }
};