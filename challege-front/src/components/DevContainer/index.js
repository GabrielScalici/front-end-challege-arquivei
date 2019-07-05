import React, { Component } from 'react';

//COMPONENTES
import ListItems from '../ListItems';


//REDUX
import { connect } from 'react-redux';
import {
    modificaConsult, modificaDispConsult, modificaNumConsult
} from '../../redux/actions/ConsultActions';
import {
    modificaNameUser, modificaEmailUser, modificaCnpjUser
} from '../../redux/actions/UserActions';
import {
    modificaNameCard, modificaNumCard, modificaValidCard, modificaCvvCard
} from '../../redux/actions/CardActions';

//FIREBASE
import { db } from '../../utils/firebase';

import '../../Styles.css';

export class DevContainer extends Component {
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
                    <ListItems
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
        name_user: state.UserReducer.name_user,
        email_user: state.UserReducer.email_user,
        cnpj_user: state.UserReducer.cnpj_user,
        name_card: state.CardReducer.name_card,
        num_card: state.CardReducer.num_card,
        valid_card: state.CardReducer.valid_card,
        cvv_card: state.CardReducer.cvv_card,

    }
)
export default connect(mapStateToProps, {
    modificaConsult, modificaDispConsult, modificaNumConsult,
    modificaCnpjUser, modificaNameUser, modificaEmailUser,
    modificaNameCard, modificaNumCard, modificaValidCard, modificaCvvCard
})(DevContainer);
