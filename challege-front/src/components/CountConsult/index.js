import React from 'react';
import PropTypes from 'prop-types';


export const CountConsult = (props) => {
    return (
        <div className="Counter">
            <div className="ui card">
                <div className="content">
                    <div className="ui statistic">
                        <div className="label">
                            Você tem
                    </div>
                        <div className="value">
                            {props.count}
                        </div>
                        <div className="label">
                            {props.title}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

CountConsult.propTypes = {
    title: PropTypes.string,
    count: PropTypes.number,
}

export default CountConsult;
