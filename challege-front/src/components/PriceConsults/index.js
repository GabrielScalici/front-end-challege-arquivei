import React from 'react';
import PropTypes from 'prop-types';


export const PriceConsults = (props) => {
    return (
        <div className="Container-Price">
            Valor total da compra:
                <div className="ui massive tag labels">
                <div className="ui massive label">
                    {props.valor}
                </div>
            </div>
        </div>
    );
}

PriceConsults.propTypes = {
    valor: PropTypes.string
}

export default PriceConsults;
