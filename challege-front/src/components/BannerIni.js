import React from 'react';

import './BannerIni.css';


const BannerIni = (props) => {
    return (
        <div>
            <h1 className="Title"> {props.title} </h1>
        </div>

    );
};


export default BannerIni;