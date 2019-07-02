import React from 'react';


const CountConsult = (props) => {
    return (
        <div class="ui card">
            <div class="content">
                {/* <div class="header">Você tem :</div>
                <div class="meta">
                    <h1> {props.disp_consults} </h1>
                    <p> Consultas Disponíveis </p>
                </div> */}
                <div class="ui statistic">
                    <div class="label">
                        Você tem
                    </div>
                    <div class="value">
                        40,509
                    </div>
                    <div class="label">
                        Consultas Disponíveis
                    </div>
                    <div>
                        <span> Última consulta em:</span>
                        <span>{props.last_consult}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CountConsult;
