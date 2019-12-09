import React, {useState} from 'react';

export const Form = ({handleSubmitForm}) => {
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");


    const handleChangeName = (e) => {
        setName(e.target.value);
    };

    const handleChangeMail = (e) => {
        setMail(e.target.value);
    };

    const handleClickBuy = () => {
        handleSubmitForm({name, mail});
    };

    return (
        <div className="grid">
                <div className="grid-item">
                    <h4 className="form-title"></h4>
                    <div className="form-group">
                        <div className="form-control">
                            <input value={name} type="text" className="input buy-form" placeholder="Name" onChange={handleChangeName}></input>
                        </div>
                        <div className="form-control">
                            <input value={mail} type="emeil" className="input buy-form" placeholder="E-mail" onChange={handleChangeMail}></input>
                        </div>
                        <div className="button-controller">
                        <button className="button btn-submit" disabled={!name || !mail} onClick={handleClickBuy}>Buy</button>
                        </div>
                    </div>
                </div>
        </div>
       
    )
}