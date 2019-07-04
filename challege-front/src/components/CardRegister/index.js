import React from 'react';

//IMAGENS
import card from '../../images/card.png';
import none from '../../images/none.png';

//REDUX
import { connect } from 'react-redux';
import {
    modificaNameCard, modificaNumCard, modificaValidCard, modificaCvvCard
} from '../../redux/actions/CardActions';

import '../../Styles.css';

const CardRegister = (props) => {
    if (props.name_card === '' && props.num_card === '' && props.valid_card === '' && props.cvv_card === '') {
        return (
            <div class="ui horizontal huge list">
                <div class="item">
                    <img alt="NoneAvatar" class="ui avatar image" src={none} />
                    <div class="content">
                        Não há nenhum cartão cadastrado
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div class="ui horizontal huge list">
            <div class="item">
                <img alt="Avatar" class="ui avatar image" src={card} />
                <div class="content">
                    <div class="header"> {props.num_card} </div>
                    {props.name_card}
                </div>
            </div>
        </div>
    );
}

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
})(CardRegister);