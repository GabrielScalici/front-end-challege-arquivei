import React from 'react';


//REDUX
import { connect } from 'react-redux';
import {
    modificaNameConsult, modificaPhotoConsult
} from '../../redux/actions/ConsultActions';

export const ResultConsult = (props) => {

    return (
        <div>
            <div className="ui card">
                <a className="image" href={props.photo_consult}>
                    <img src={props.photo_consult} />
                </a>
                <div className="content">
                <a className="header">{props.name_consult}</a>
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