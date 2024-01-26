
import React from 'react';
import { connect } from 'react-redux';
import { clearFields } from '../actions/fieldActions';
import './DisplayFields.css';

const DisplayFields = ({ fields, dispatch }) => {
  const handleClearFields = () => {
    dispatch(clearFields());
  };

  return (
    <div className="display-fields-container">
      <h2>Display Fields</h2>
      <table className="fields-table">
        <thead>
          <tr>
            <th>Field Type</th>
            <th>Display Name</th>
            <th>Validation</th>
            <th>Data Type</th>
            <th>Additional Data</th>
            <th>Mandatory</th>
            <th>Field Data</th>
          </tr>
        </thead>
        <tbody>
          {fields.map((field, index) => (
            <tr key={index}>
              <td>{field.fieldType}</td>
              <td>{field.displayName}</td>
              <td>{field.validation}</td>
              <td>{field.dataType}</td>
              <td>{renderDataTypeField(field)}</td>
              <td>{field.mandatory}</td>
              <td>{field.fieldData}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleClearFields} className="reset-button">Reset</button>
    </div>
  );
};

const renderDataTypeField = (field) => {
  switch (field.dataType) {
    case 'string':
      return (
        <span>
          <strong>String Data:</strong> {field.stringData}
        </span>
      );
    case 'number':
      return (
        <span>
          <strong>Number Data:</strong> {field.numberData}
        </span>
      );
    case 'date':
      return (
        <span>
          <strong>Date Data:</strong> {field.dateData}
        </span>
      );
    default:
      return null;
  }
};

const mapStateToProps = (state) => ({
  fields: state.fields.fields,
});

export default connect(mapStateToProps)(DisplayFields);
