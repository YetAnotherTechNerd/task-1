import React from 'react';
import Dropdown from '../../common/Dropdown';

const QuarterDropdown = ({ quarters, selected, onChange, disabled }) => (
  <Dropdown
    label="Quarter"
    options={quarters}
    value={selected}
    onChange={onChange}
    placeholder="All Quarters"
    disabled={disabled}
    className="w-36"
  />
);

export default QuarterDropdown;
