import React from 'react';
import PropTypes from 'prop-types';

//IMAGENS
import note from '../../images/note.png';

//FIREBASE
import { db } from '../../utils/firebase';

export const HistoryList = (props) => {

    function removeItem(id){
        db.ref('COMPRA').child(id).remove();
        alert("Registro apagado com sucesso");
    }

    return (
        <div className="ui massive celled list">
            {props.items.map((item, index) => {
                return (
                    <div className="item" key={index} >
                        <img className="ui avatar image" src={note} />
                        <div className="content">
                            <div className="header"> Preço: R$: {item.VALOR}</div>
                            {item.QUANTIDADE} consultas compradas em {item.DATA}
                        </div>
                        <div className="right floated content">
                            <div className="ui buttons">
                                {/* <button className="ui green basic button">Editar</button> */}
                                <button
                                    onClick={() => removeItem(props.keys[index])}
                                    
                                    className="ui red basic button">Apagar</button>
                            </div>
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