import React from 'react';
import { Card, Container, Alert } from 'react-bootstrap';


//REDUX
import { connect } from 'react-redux';
import {
    modificaNameConsult, modificaPhotoConsult
} from '../../redux/actions/ConsultActions';

export const ResultConsult = (props) => {

    return (
        <div>
            <div class="ui card">
                <a class="image" href={props.photo_consult}>
                    <img src={props.photo_consult} />
                </a>
                <div class="content">
                <a class="header">{props.name_consult}</a>
                </div>
            </div>
        </div>

    );


}

//USANDO REDUX
const mapStateToProps = state => (
    {
        name_consult: state.ConsultReducer.name_consult,
        photo_consult: state.ConsultReducer.photo_consult,
    }
)
export default connect(mapStateToProps, {
    modificaNameConsult, modificaPhotoConsult
})(ResultConsult);