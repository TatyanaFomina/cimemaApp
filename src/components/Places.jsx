import React from 'react';

export const Places = ({space, handleChoosePlace}) => {
    return (
        <div className="places">
            {space.map((item, i) => {
                return (
                    <div key={i} className="row">
                        <h4 className="row-number">Ряд {i + 1}</h4>
                        {item.map((elem, n) => {
                            return (
                                <div key={`${i} - ${n}`} className={`place ${elem.booked ? "booked" : "free"}`} onClick={() => handleChoosePlace(elem)}>
                                <span>{elem.place}</span>
                                </div>
                            );
                        })}
                        </div>

                );
            })}
        </div>
    )
};