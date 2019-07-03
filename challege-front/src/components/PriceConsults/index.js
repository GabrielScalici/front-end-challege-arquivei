import React from 'react';


const PriceConsults = (props) => {
    return (
        <div>
            Valor total da compra:
                <div className="ui massive tag labels">
                <div className="ui massive label">
                    {props.valor}
                </div>
            </div>
        </div>
    );
}

export default PriceConsults;
