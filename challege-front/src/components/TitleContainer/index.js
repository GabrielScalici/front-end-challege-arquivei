import React from 'react';

const TitleContainer = (props) => {

    return (
        <div className="UserRegister">
            <div className="Title-History">
                    <h2 className="ui icon header">
                        <div className="content primary">
                            {props.title}
                        <div className="sub header">{props.desc}</div>
                        </div>
                    </h2>
                </div>
        </div>
    );
}

export default TitleContainer;
