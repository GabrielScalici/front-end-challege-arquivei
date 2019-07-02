import React from 'react';

//COMPONENTES
import PriceConsults from '../PriceConsults';

const BuyConsult = (props) => {
    return (
        <div>
            <div className="ui card">
                <div className="content">
                    <div className="header">Comprar</div>
                </div>
                <div className="content">
                    <div className="ui small feed">
                        <div className="event">
                            <div className="content">
                                <div className="summary">
                                    Digite a quantidade de consultas que deseja adquirir
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <form className="ui form">
                    <div className="field">
                        <label>Quantidade</label>
                        <input type="number" name="name" placeholder="Digite o número da nota" />
                    </div>
                    <div className="extra content">
                        <button type="submit" className="ui button Button-consult"> Comprar </button>
                    </div>
                </form>
            </div>
            <PriceConsults 
                quantidade="3000"
                valor="R$: 10,00"
            />
        </div>

    );
};

export default BuyConsult;