import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

//COMPONENTES
import HistoryList from '../HistoryList';
import ChartCustom from '../ChartCustom';

//REDUX
import { connect } from 'react-redux';
import {
    modificaConsult, modificaDispConsult, modificaNumConsult
} from '../../redux/actions/ConsultActions';

//FIREBASE
import { db } from '../../utils/firebase';

import '../../Styles.css';

export class HistoryContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            keys: [],
            screenWidth: null,
        }

        //this.state = { screenWidth: null };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        db.ref('COMPRA').on('value', snapshot => {
            let data = snapshot.val();
            let item = Object.values(data);
            var key = Object.keys(data);
            this.setState({ items: item });
            this.setState({ keys: key });
        });

        window.addEventListener("resize", this.updateWindowDimensions());
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowDimensions)
    }

    updateWindowDimensions() {
        this.setState({ screenWidth: window.innerWidth });
    }


    render() {
        return (
            <div>
                <div className="Title-History">
                    <h2 className="ui icon header">
                        <div className="content primary">
                            Gráfico
                        <div className="sub header">Saiba quantas consultas comprou em cada compra</div>
                        </div>
                    </h2>
                </div>
                <Container sm={12} >
                    <ChartCustom data={this.state.items} width={this.state.screenWidth} />
                </Container>
                <div className="Title-History">
                    <h2 className="ui icon header">
                        <div className="content primary">
                            Histórico
                        <div className="sub header">Relatório completo das compras efetuadas no site</div>
                        </div>
                    </h2>
                </div>
                <HistoryList
                    className="List-Buy"
                    items={this.state.items}
                    keys={this.state.keys}
                />
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
