import React from 'react';

//COMPONENTES
import PriceConsults from '../PriceConsults';
import { data } from '../DataAtual';

//FIREBASE
import { db } from '../../utils/firebase';

//REDUX
import { connect } from 'react-redux';
import {
    modificaConsult, modificaDispConsult, modificaNumConsult, modificaQuantCompra
} from '../../redux/actions/ConsultActions';


const BuyConsult = (props) => {

    function UpdateValues() {
        props.modificaDispConsult(props.disp_consults + props.quant_compra);
        console.log("Quantidade disponivel" + props.disp_consults);
    }


    function addCompra() {
        //ADICIONANDO NO BANCO DE DADOS FIREBASE
        db.ref('/COMPRA').push({
            QUANTIDADE: props.quant_compra,
            DATA: data(),
            VALOR: '0,00'
        });

        UpdateValues();

        //ALERTA SIMPLES DE CONCLUSÃO
        alert("Compra realizada com sucesso");

    }

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
                <div className="ui form">
                    <div className="field">
                        <label>Quantidade</label>
                        <input type="number" name="name" placeholder="Digite o número da nota"
                            onChange={(text) => {
                                props.modificaQuantCompra(text.target.value)
                            }}
                        />
                    </div>
                    <div className="extra content">
                        <button className="ui button Button-consult"
                            onClick={() => {addCompra()}}
                        > Comprar </button>
                    </div>
                </div>
            </div>
            <PriceConsults
                quantidade="3000"
                valor="R$: 10,00"
            />
        </div>

    );
};

//USANDO REDUX
const mapStateToProps = state => (
    {
        consult: state.ConsultReducer.consult,
        num_consults: state.ConsultReducer.num_consults,
        disp_consults: state.ConsultReducer.disp_consults,
        quant_compra: state.ConsultReducer.quant_compra,

    }
)
export default connect(mapStateToProps, {
    modificaConsult, modificaDispConsult, modificaNumConsult, modificaQuantCompra,
})(BuyConsult);
