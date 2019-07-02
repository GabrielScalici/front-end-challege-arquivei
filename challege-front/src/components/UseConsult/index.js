import React from 'react';

//REDUX
import { connect } from 'react-redux';
import {
    modificaConsult, modificaDispConsult, modificaNumConsult, modificaLastConsult
} from '../../redux/actions/ConsultActions';

const UseConsult = (props) => {
    return (
        <div class="ui card">
            <div class="content">
                <div class="header">Consultar</div>
            </div>
            <div class="content">
                <div class="ui small feed">
                    <div class="event">
                        <div class="content">
                            <div class="summary">
                                Você possui já consultou {props.num_consults} vezes.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <form className="ui form">
                <div className="field">
                    <label>Número para consulta</label>
                    <input type="text" name="name" placeholder="Nome escrito no cartão" />
                </div>
                <div class="extra content">
                    <button type="submit" class="ui button Button-consult"> Consultar </button>
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
