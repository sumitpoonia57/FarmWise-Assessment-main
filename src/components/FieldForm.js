// components/FieldForm.js

import React, { useState } from 'react';
import './FieldForm.css';

const FieldForm = ({ onSubmit }) => {
    const [field, setField] = useState({
        fieldType: '',
        displayName: '',
        validation: '',
        dataType: 'string',
        mandatory: 'No',
        stringData: '',  // Field for string data
        numberData: 0,   // Field for number data
        dateData: '',    // Field for date data
        fieldData: '',   // New field for Field Data
    });

    const [fieldCount, setFieldCount] = useState(0);

    const handleChange = (e) => {
        setField({ ...field, [e.target.name]: e.target.value });
    };

    const renderDataTypeField = () => {
        switch (field.dataType) {
            case 'string':
                return (
                    <label>
                        String Field
                        <input type="text" name="stringData" value={field.stringData} onChange={handleChange} />
                    </label>
                );
            case 'number':
                return (
                    <label>
                        Number Field
                        <input type="number" name="numberData" value={field.numberData} onChange={handleChange} />
                    </label>
                );
            case 'date':
                return (
                    <label>
                        Date Field
                        <input type="date" name="dateData" value={field.dateData} onChange={handleChange} />
                    </label>
                );
            default:
                return null;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (fieldCount < 4) {
            onSubmit(field);
            setFieldCount(fieldCount + 1);
        } else {
            window.alert('Maximum limit reached (4 fields)');
        }
        setField({
            fieldType: '',
            displayName: '',
            validation: '',
            dataType: 'string',
            mandatory: 'No',
            stringData: '',
            numberData: 0,
            dateData: '',
            fieldData: '',
        });
    };

    return (
        <form onSubmit={handleSubmit} className='field-form'>
            <label>
                Dynamic Data Collection
                <div className="dropdown-container">
                    <select name="fieldType" value={field.fieldSelect} onChange={handleChange} required>
                        <option value="">Select Type</option>
                        <option value="Student">Student</option>
                        <option value="Salaried">Salaried</option>
                        <option value="Business">Business</option>
                    </select>
                </div>
            </label>

            <label>
                Field Type:
                <select name="fieldType" value={field.fieldType} onChange={handleChange} required>
                    <option value="">Select Type</option>
                    <option value="textbox">Text Box</option>
                    <option value="date">Date</option>
                    <option value="dropdown">Dropdown</option>
                </select>
            </label>
            <label>
                Field Display Name
                <input type="text" name="displayName" value={field.displayName} onChange={handleChange} required />
            </label>
            <label>
                Field Validation
                <input type="text" name="validation" value={field.validation} onChange={handleChange} />
            </label>
            <label>
                Field Data Type
                <select name="dataType" value={field.dataType} onChange={handleChange} required>
                    <option value="string">String</option>
                    <option value="number">Number</option>
                    <option value="date">Date</option>
                </select>
            </label>
            {renderDataTypeField()}
            <label>
                Mandatory
                <select name="mandatory" value={field.mandatory} onChange={handleChange} required>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </label>
            <label>
                Field Data
                <input type="text" name="fieldData" value={field.fieldData} onChange={handleChange} required />
            </label>
            <button type="submit" disabled={fieldCount >= 4}>Confirm</button>
        </form>
    );
};

export default FieldForm;
