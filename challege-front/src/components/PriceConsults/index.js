import React from 'react';
import PropTypes from 'prop-types';

import '../../Styles.css';


export const PriceConsults = (props) => {
    return (
        <div className="Container-Price">
                <div className="ui massive tag labels">
                <div className="ui massive label">
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
