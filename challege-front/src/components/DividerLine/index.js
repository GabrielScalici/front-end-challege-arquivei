import React from 'react';

const DividerLine = (props) => {
    if(props.simple){
        return(
            <div class="ui divider"></div>
        );
    }
    
    return (
        <div>
            <h4 className="ui horizontal divider header">
                <i className={ props.icon + " icon"}></i>
                {props.title}
            </h4>
        </div>

    );
};


export default DividerLine;