import React from 'react';

import '../Styles.css';


const BannerIni = (props) => {
    return (
        <div>
            <h1 className="primary"> {props.title} </h1>
        </div>

    );
};


export default BannerIni;