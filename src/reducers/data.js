import {SET_MOVIES, SET_ROOMS, SET_SESSIONS} from "../constants";


const initialValues = {
    movies: [],
    genres: [],
    rooms: [],
    sessions: [],
};

export const data = (state = initialValues, action) => {
    switch(action.type) {
        case SET_MOVIES:
            const genres = action.payload.reduce((acc, item) => {
                if (item.genre && item.genre.length) {
                    item.genre.forEach((elem) => {
                        if (elem && !acc.includes(elem.trim())) {
                            acc.push(elem.trim());
                        }
                    });
                }
                
                return acc;
            }, []);
            return {
                ...state,
                movies: action.payload,
                genres
            };
            case SET_SESSIONS:
                const sortedArr = action.payload.sort((a,b) => {
                    if (new Date(a.date) > new Date(b.date)) {
                        return 1;
                    } if (new Date(a.date) < new Date(b.date)) {
                        return -1;
                    } 
                        return 0;
                });
                    
                const newArr = sortedArr.reduce((acc, item) => {
                    if  (!acc.length) {
                        acc.push([]);
                    }
          
                    const lastElemDate = acc[acc.length-1].length ? acc[acc.length-1][0].date.split("T")[0] : null;
                    const itemDate = item.date.split("T")[0];
                    const differentDates = +new Date(lastElemDate) !== +new Date(itemDate);
                    if (acc[acc.length-1].length && differentDates) {
                        return [...acc, [item]];
                    }
                    acc[acc.length-1].push(item);
          
                    return acc;
                }, []);

    //             const newArr2 = newArr.map(item => {
    //                 return item.reduce((acc, elem) => {
    //                     if(!acc.length) {
    //                         return [[elem]];
    //                     }
    //                 const hasSameMovie = acc.some(movieArr => movieArr.some(obj => obj.movie === elem.movie));
    //                 if(hasSameMovie) {
    //                     const re = acc.map(movieArr => {
    //                         const hasSameMovie = movieArr.some(obj => obj.movie === elem.movie);
                    
    //                 if (hasSameMovie) {
    //                     return [...movieArr,elem];
    //                 }
    //                 return movieArr; 
    //             });
    //             return re;
    //         } else {
    //             return [...acc, [elem]];
    //         }
    //     }, []);
    // });
                    
                    return {
                        ...state,
                        sessions: newArr,
                       
                    };
            case SET_ROOMS:
          
                return {
                  ...state,
                  rooms: action.payload
                } 
        default:
            return state;
    }
};