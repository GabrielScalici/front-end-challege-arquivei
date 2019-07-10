import React from 'react';
import PropTypes from 'prop-types';

import '../../Styles.css';

//IMAGENS
import money from '../../images/money.png';


export const PriceConsults = (props) => {
    return (
        <div className="Container-Price">
                <div className="ui massive tag labels">
                <div className="ui massive label">
                <img alt="Money" className="ui avatar image" src={money} />
                    {props.valor}
                </div>
            </div>
            <p className="body-text-rubik dark"> Valor total da compra: </p>
        </div>
    );
}

PriceConsults.propTypes = {
    valor: PropTypes.string
}

export default PriceConsults;
