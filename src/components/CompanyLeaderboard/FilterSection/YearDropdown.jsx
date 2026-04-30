import React from 'react';
import Dropdown from '../../common/Dropdown';

const YearDropdown = ({ years, selected, onChange }) => {
  const allYearsOptions = ['All Years', ...years];

  const handleChange = (val) => {
    if (val === 'All Years' || val === null) {
      onChange(null);
    } else {
      onChange(val ? Number(val) : null);
    }
  };

  const displayValue = selected === null ? 'All Years' : selected;

  return (
    <Dropdown
      id="year-dropdown"
      options={allYearsOptions}
      value={displayValue}
      onChange={handleChange}
      placeholder="All Years"
    />
  );
};

export default YearDropdown;
