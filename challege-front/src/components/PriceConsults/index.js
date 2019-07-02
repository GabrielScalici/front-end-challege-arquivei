import React from 'react';


const PriceConsults = (props) => {
    return (
        <div>
            Valor total da compra:
                <div className="ui big tag labels">
                <div className="ui big label">
                    {props.valor}
                </div>
            </div>
        </div>
    );
}

export default PriceConsults;
