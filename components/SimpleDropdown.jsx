'use client';
import React, { useState } from 'react';
import './SimpleDropdown.css';

export default function SimpleDropdown({ options = [], onChange, defaultValue }) {
  const [value, setValue] = useState(defaultValue || '');

  const handleChange = (e) => {
    setValue(e.target.value);
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <select className="simple-dropdown" value={value} onChange={handleChange}>
      <option value="">Select an option</option>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
