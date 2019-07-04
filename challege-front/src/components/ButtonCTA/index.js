import React from 'react';
import './ButtonCTA.css';

const ButtonCTA = (props) => {
    return (
        <button className="Btn join-button" onClick={() => {alert("MAYBEEEE")}}>
            <strong className="Txt-Button"> {props.title} </strong>
        </button>
    );
}

export default ButtonCTA;