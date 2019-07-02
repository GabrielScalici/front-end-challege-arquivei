import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

//REDUX
import { connect } from 'react-redux';
import {
    modificaNameCard, modificaNumCard, modificaValidCard, modificaCvvCard
} from '../../redux/actions/CardActions';


const CardUser = (props) => {
    return (

        <Cards
            number={props.num_card}
            name={props.name_card}
            expiry={props.valid_card}
            cvc={props.cvv_card}
        />
    );
};

//USANDO REDUX
const mapStateToProps = state => (
    {
        name_card: state.CardReducer.name_card,
        num_card: state.CardReducer.num_card,
        valid_card: state.CardReducer.valid_card,
        cvv_card: state.CardReducer.cvv_card,
    }
)
export default connect(mapStateToProps, {
    modificaNameCard, modificaNumCard, modificaValidCard, modificaCvvCard
})(CardUser);