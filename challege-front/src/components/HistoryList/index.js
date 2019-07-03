import React from 'react';

//IMAGENS
import note from '../../images/note.png';

const HistoryList = (props) => {
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


export default HistoryList;