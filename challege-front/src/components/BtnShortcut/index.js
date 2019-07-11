import React, { useState } from 'react';
import PropTypes from 'prop-types';

import '../../Styles.css';

//IMAGENS
import money from '../../images/money.png';

export const BtnShortcut = (props) => {

    const [show, setShow] = useState(false);

    function onMouse(e) {
        setShow(e)
    }

    if (!show) {
        return (
            <div className="BtnShortcut">
                <button
                    className="ui massive blue button"
                    onClick={props.onClick}
                    onMouseEnter={() => onMouse(true)}
                    onMouseLeave={() => onMouse(false)}
                >
                    {props.title}
                </button>
            </div>
        );
    } else {
        return (
            <div className="BtnShortcutPrice">
                <button
                    className="ui massive blue button"
                    onClick={props.onClick}
                    onMouseEnter={() => onMouse(true)}
                    onMouseLeave={() => onMouse(false)}
                >
                    {props.title}
                </button>
                <div className="field">
                    <div className="ui pointing label huge">
                    <img alt="Money" className="ui avatar image" src={money} />
                        {props.price}
                    </div>
                </div>
            </div>
        );
    }
}

BtnShortcut.propTypes = {
    title: PropTypes.string,
    onClick: PropTypes.func,
}

export default BtnShortcut;