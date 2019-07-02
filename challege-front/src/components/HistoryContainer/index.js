import React, { Component } from 'react';

//REDUX
import { connect } from 'react-redux';
import {
    modificaConsult, modificaDispConsult, modificaNumConsult
} from '../../redux/actions/ConsultActions';

class HistoryContainer extends Component {
    render() {
        return (
            <div>
                <p> History </p>
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