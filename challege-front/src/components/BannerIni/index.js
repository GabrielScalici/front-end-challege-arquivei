import React from 'react';

import './BannerIni.css';
import '../../Styles.css';


const BannerIni = (props) => {
    return (
        <div>
            <h1 className="Title hero-text-rubik"> {props.title} </h1>
        </div>

    );
};


export default BannerIni;