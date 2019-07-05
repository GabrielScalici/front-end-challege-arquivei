import React from 'react';
import PropTypes from 'prop-types';

//IMAGENS
import note from '../../images/note.png';

//FIREBASE
import { db } from '../../utils/firebase';

//COMPONENTES
import DividerLine from '../DividerLine';

import '../../Styles.css';

export const ListItems = (props) => {

    function removeItem(id, safe) {
        db.ref('COMPRA').child(id).remove();
        console.log(id);
    }

    return (
        <div>
            <DividerLine title="Registro de compras" />
            <div className="ui massive celled list">
                {props.items.map((item, index) => {
                    if (item.VALOR !== '') {
                        return (
                            <div className="item" key={index} >
                                <img alt="Note" className="ui avatar image" src={note} />
                                <div className="content">
                                    <div className=" title-text-rubik primary"> Preço: R$: {item.VALOR}</div>
                                    <p className="body-text-rubik dark"> {item.QUANTIDADE} consultas compradas em {item.DATA} </p>
                                </div>
                                <div className="right floated content">
                                    <div className="ui buttons">
                                        {/* <button className="ui green basic button">Editar</button> */}
                                        <button
                                            onClick={() => removeItem(props.keys[index], props.keys[0])}
                                            className="ui red basic button">Apagar</button>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                })}
            </div>
        </div>

    );
};

ListItems.propTypes = {
    items: PropTypes.array,
}

export default ListItems;