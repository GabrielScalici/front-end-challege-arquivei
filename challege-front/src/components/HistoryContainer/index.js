import React, { Component } from 'react';

//IMAGENS
import note from '../../images/note.png';

//REDUX
import { connect } from 'react-redux';
import {
    modificaConsult, modificaDispConsult, modificaNumConsult
} from '../../redux/actions/ConsultActions';

class HistoryContainer extends Component {
    render() {
        return (
            <div>
                <h2> Histórico de compras </h2>
                <div class="ui huge aligned divided list">
                    <div class="item">
                        <div class="right floated content">
                            <div class="ui button">Add</div>
                        </div>
                        <img class="ui avatar image" src={note} />
                        <div class="content">
                            Lena
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


//USANDO REDUX
const mapStateToProps = state => (
    {
        consult: state.ConsultReducer.consult,
        num_consults: state.ConsultReducer.num_consults,
        disp_consults: state.ConsultReducer.disp_consults,

    }
)
export default connect(mapStateToProps, {
    modificaConsult, modificaDispConsult, modificaNumConsult
})(HistoryContainer);
