import React from 'react';

//REDUX
import { connect } from 'react-redux';
import {
    modificaConsult, modificaDispConsult, modificaNumConsult, modificaLastConsult
} from '../../redux/actions/ConsultActions';

const UseConsult = (props) => {

    function UseConsult() {
        props.modificaDispConsult(parseInt(props.disp_consults) - 1);
        props.modificaNumConsult(parseInt(props.num_consults) + 1);

    }

    return (
        <div className="ui card">
            <div className="content">
                <div className="header">Consultar</div>
            </div>
            <div className="content">
                <div className="ui small feed">
                    <div className="event">
                        <div className="content">
                            <div className="summary">
                                Você possui já consultou {props.num_consults} vezes.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <form className="ui form">
                <div className="field">
                    <label>Número para consulta</label>
                    <input type="text" name="name" placeholder="Digite o número da nota" />
                </div>
                <div className="extra content">
                    <button type="submit" className="ui button Button-consult"
                        onClick={ () =>  UseConsult()}
                    > Consultar </button>
                </div>
            </form>
        </div>
    );
}

//USANDO REDUX
const mapStateToProps = state => (
    {
        consult: state.ConsultReducer.consult,
        num_consults: state.ConsultReducer.num_consults,
        disp_consults: state.ConsultReducer.disp_consults,
        last_consult: state.ConsultReducer.last_consult,

    }
)
export default connect(mapStateToProps, {
    modificaConsult, modificaDispConsult, modificaNumConsult, modificaLastConsult
})(UseConsult);
