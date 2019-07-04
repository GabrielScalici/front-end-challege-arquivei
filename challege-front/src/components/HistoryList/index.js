import React from 'react';
import PropTypes from 'prop-types';

//IMAGENS
import note from '../../images/note.png';

export const HistoryList = (props) => {
    return (
        <div className="ui massive celled list">
            {props.items.map((item, index) => {
                return (
                    <div className="item" >
                        <img className="ui avatar image" src={note} />
                        <div className="content">
                            <div className="header"> Preço: R$: {item.VALOR}</div>
                            {item.QUANTIDADE} consultas compradas em {item.DATA}
                        </div>
                    </div>
                );
            })}
        </div>

    );
};

HistoryList.propTypes = {
    items: PropTypes.array,
}

export default HistoryList;