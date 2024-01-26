// containers/FieldFormContainer.js

import { connect } from 'react-redux';
import FieldForm from '../components/FieldForm';
import { addField } from '../actions/fieldActions';

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (field) => dispatch(addField(field)),
    };
};

const FieldFormContainer = connect(null, mapDispatchToProps)(FieldForm);

export default FieldFormContainer;
