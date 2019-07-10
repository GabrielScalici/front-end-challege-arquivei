import React from 'react';
import './BtnShortcut.css';

const BtnShortcut = (props) => {
    return (
        <button class="ui massive blue button"> {props.title} </button>
    );
}

export default BtnShortcut;