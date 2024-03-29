import React from 'react';
import '../../Styles.css';

const DividerLine = (props) => {
    if(props.simple){
        return(
            <div className="ui divider"></div>
        );
    }
    
    return (
        <div className="margin-default">
            <h4 className="ui horizontal divider header">
                <i className={ props.icon + " icon"}></i>
                <p className="body-text-rubik dark"> {props.title} </p>
            </h4>
        </div>

    );
};


export default DividerLine;