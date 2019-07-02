import React from 'react';


const CountConsult = (props) => {
    return (
        <div className="ui card">
            <div className="content">
                {/* <div class="header">Você tem :</div>
                <div class="meta">
                    <h1> {props.disp_consults} </h1>
                    <p> Consultas Disponíveis </p>
                </div> */}
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
                    {/* <div>
                        <span> Última consulta em:</span>
                        <span>{props.last_consult}</span>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default CountConsult;
