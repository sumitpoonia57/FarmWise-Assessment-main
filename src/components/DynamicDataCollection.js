import React, { useState } from 'react';
import './DynamicDataCollection.css'; 
import { connect } from 'react-redux';

function DynamicDataCollection({fields}) {
  
  const [department, setDepartment] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [pincode, setPincode] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    window.alert('Thanks!');
  };

  const handlePincodeChange = (event) => {
    const value = event.target.value;
    if (/^\d{0,6}$/.test(value)) {
      setPincode(value);
    }
  };

  return (
    <form className="data-collection-form" onSubmit={handleSubmit}>
      <h2>Dynamic Data Collection</h2>
      <div className="form-group">
        <label htmlFor="department">Department</label>
        <select
          required
          id="department"
          name="department"
          value={department}
          onChange={(event) => setDepartment(event.target.value)}
        >
          <option value="">Select Department</option>
          {fields.map((field, index) => (
            <option key={index} value={field.fieldData}>
              {field.fieldData}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="mobileNumber">Mobile Number</label>
        <select
          required
          type="number"
          id="mobileNumber"
          name="mobileNumber"
          value={mobileNumber}
          onChange={(event) => setMobileNumber(event.target.value)}
        >
          <option value="">Select Mobile Number</option>
          {fields.map((field, index) => (
            <option key={index} value={field.fieldData}>
              {field.numberData}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="dateOfBirth">Date of Birth</label>
        <input
          required
          type="date"
          id="dateOfBirth"
          name="dateOfBirth"
          value={dateOfBirth}
          onChange={(event) => setDateOfBirth(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="pincode">Pin Code</label>
        <input
          required
          type="number"
          maxLength={6}
          id="pincode"
          name="pincode"
          value={pincode}
          onChange={handlePincodeChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

const mapStateToProps = (state) => ({
  fields: state.fields.fields,
});

export default connect(mapStateToProps)(DynamicDataCollection);