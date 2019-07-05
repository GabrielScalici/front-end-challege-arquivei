import React from 'react';
import PropTypes from 'prop-types';

//IMAGENS
import note from '../../images/note.png';

import '../../Styles.css';

export const HistoryList = (props) => {

    return (
        <div className="ui massive celled list">
            {props.items.map((item, index) => {
                if (item.VALOR !== '') {
                    return (
                        <div className="item" key={index} >
                            <img alt="Note"className="ui avatar image" src={note} />
                            <div className="content">
                                <div className=" title-text-rubik primary"> Preço: R$: {item.VALOR}</div>
                                <p className="body-text-rubik dark"> {item.QUANTIDADE} consultas compradas em {item.DATA} </p>
                            </div>
                        </div>
                    );
                }
            })}
        </div>

    );
};

HistoryList.propTypes = {
    items: PropTypes.array,
}

export default HistoryList;