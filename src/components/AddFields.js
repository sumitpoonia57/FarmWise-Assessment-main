// components/AddFields.js

import React from 'react';
import { connect } from 'react-redux';
import { addField } from '../actions/fieldActions';
import FieldForm from './FieldForm';

const AddFields = ({ addField }) => {
  const handleSubmit = (field) => {
    addField(field);
  };

  return (
    <div style={{marginTop:"40px"}}>
      <FieldForm onSubmit={handleSubmit} />
    </div>
  );
};

export default connect(null, { addField })(AddFields);