import React, {useState} from "react";
import {ModalBuyTicket} from "./ModalWindow";


export const MovieSession = ({session}) => {

    const [showModal, setShowModal] = useState(false);


    const handleShowModal = () => {
       setShowModal(!showModal);
   };
   
    return(
    <React.Fragment>
    <div className="grid card-films">
        <div className="grid-item left-card width-1-3">
        <div className="card-top">
            <figure className="image-container">
                <img src={session.movie.poster} alt="poster" className="card-poster"/>
            </figure>
            <div className="button-controller">
                <div className="button" onClick={handleShowModal}>Buy ticket</div>
            </div>
        </div>
        </div>
        
        <div className="grid-item right-card width-2-3">
            <div className="card-bottom">
                <h3 className="card-title">{session.movie.title}</h3>
                <p className="card-description">{session.movie.description}</p>
                
                    <div className="session-info">
                        <p style={{ backgroundColor:session.room, borderRadius: '4px', padding: '5px'}}>Зал: {session.room}</p>
                        <p style={{backgroundColor: '#0eb493', borderRadius: '4px', padding: '5 px', color: 'white'}}>Время:  {new Date(session.date).toLocaleTimeString().slice(0, -3)}</p>
                    </div>
            </div>
        </div>
    </div>
    {showModal && <ModalBuyTicket session={session} handleCloseModal={handleShowModal}/>}
    </React.Fragment>
)};