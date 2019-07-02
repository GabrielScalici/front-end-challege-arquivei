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
                <h2 className="ui icon header">
                    <i className="clone icon"></i>
                    <div className="content">
                        Histórico
                        <div className="sub header">Relatório completo das compras efetuadas no site</div>
                    </div>
                </h2>
                <div className="ui huge aligned divided list">
                    {this.props.consult.map((item, index) => {
                        return (
                            <div className="item">
                                <div className="right floated content">
                                    <div className="ui button">Add</div>
                                </div>
                                <img className="ui avatar image" src={note} />
                                <div className="content">
                                    Lena
                                </div>
                            </div>
                        );
                    })}
                    <div className="item">
                                <div className="right floated content">
                                    <div className="ui button">Add</div>
                                </div>
                                <img className="ui avatar image" src={note} />
                                <div className="content">
                                    Lena
                                </div>
                            </div>
                            <div className="item">
                                <div className="right floated content">
                                    <div className="ui button">Add</div>
                                </div>
                                <img className="ui avatar image" src={note} />
                                <div className="content">
                                    Lena
                                </div>
                            </div>
                            <div className="item">
                                <div className="right floated content">
                                    <div className="ui button">Add</div>
                                </div>
                                <img className="ui avatar image" src={note} />
                                <div className="content">
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
