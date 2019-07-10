import React, { useState } from 'react';
import PropTypes from 'prop-types';

import '../../Styles.css';

export const BtnShortcut = (props) => {

    const [show, setShow] = useState(false);

    if (!show) {
        return (
            <div className="BtnShortcut">
                <button
                    className="ui massive blue button"
                    onClick={props.onClick}
                    onMouseEnter={() => { setShow(true) }}
                    onMouseLeave={() => { setShow(false) }}
                >
                    {props.title}
                </button>
            </div>
        );
    } else {
        return (
            <div className="BtnShortcut">
                <button
                    className="ui massive blue button"
                    onClick={props.onClick}
                    onMouseEnter={() => { setShow(true) }}
                    onMouseLeave={() => { setShow(false) }}
                >
                    {props.title}
                </button>
                <div class="field">
                    <div class="ui pointing label huge">
                        R$ {props.price}
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