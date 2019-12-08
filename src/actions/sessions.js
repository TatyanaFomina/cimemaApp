import axios from 'axios';
import{URL_SCHEDULE, SET_SESSIONS, URL_ROOMS, SET_ROOMS, IS_LOADING, LOADING_FAIL} from '../constants';

export const isLoading = () => ({type: IS_LOADING});

export const setSessions = (sessions) => ({type: SET_SESSIONS, payload: sessions});
export const setRooms = (rooms) => ({type: SET_ROOMS, payload: rooms});

export const loadingFail = () => ({type: LOADING_FAIL});

export const getSessions = () => {
    return dispatch => {
        dispatch(isLoading());

        Promise.all([axios.get(URL_SCHEDULE), axios.get(URL_ROOMS)])
            .then(([sessions, rooms])=> {
            dispatch(setSessions(sessions.data.session));
            dispatch(setRooms(rooms.data.rooms));
            })
            .catch((error) =>{
                dispatch(loadingFail());
                console.error(error)
            });
    }
};