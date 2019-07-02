import React from 'react';

const DividerLine = (props) => {
    return (
        <div>
            <h4 className="ui horizontal divider header">
                <i className="tag icon"></i>
                {props.title}
            </h4>
        </div>

    );
};


export default DividerLine;